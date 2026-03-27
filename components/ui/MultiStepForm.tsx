'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { services } from '@/lib/data'
import { Check, AlertCircle } from 'lucide-react'
import { submitBooking } from '@/lib/actions/booking'

const Step1Schema = z.object({
  serviceType: z.string().min(1, 'Please choose a service'),
  patientCondition: z.string().min(1, 'Please add a patient condition'),
})

const Step2Schema = z.object({
  address: z.string().min(1, 'Please enter your address'),
  preferredStart: z.string().min(1, 'Please choose a preferred date/time'),
  duration: z.string().min(1, 'Please choose a duration'),
})

const Step3Schema = z.object({
  name: z.string().min(1, 'Your name is required'),
  phone: z.string().min(10, 'Enter a valid phone number'),
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
})

const FullSchema = Step1Schema.merge(Step2Schema).merge(Step3Schema)

type FormValues = z.infer<typeof FullSchema>

const stepFields: Array<(keyof FormValues)[]> = [
  ['serviceType', 'patientCondition'],
  ['address', 'preferredStart', 'duration'],
  ['name', 'phone', 'email'],
]

const steps = [
  { title: 'Service & Condition' },
  { title: 'Address & Timing' },
  { title: 'Your Details' },
]

export default function MultiStepForm() {
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const totalSteps = steps.length

  const serviceOptions = useMemo(() => services.map((s) => ({ value: s.name, label: s.name })), [])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    getValues,
    setError,
    clearErrors,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      serviceType: '',
      patientCondition: '',
      address: '',
      preferredStart: '',
      duration: '',
      name: '',
      phone: '',
      email: '',
    },
    mode: 'onBlur',
  })

  const validateStep = (idx: number) => {
    const schema = idx === 0 ? Step1Schema : idx === 1 ? Step2Schema : Step3Schema
    const values = getValues()
    const parsed = schema.safeParse(values)
    if (parsed.success) {
      clearErrors()
      return true
    }

    clearErrors()
    parsed.error.issues.forEach((issue) => {
      const field = String(issue.path[0]) as keyof FormValues
      setError(field, { type: 'manual', message: issue.message })
    })
    return false
  }

  const goNext = () => {
    const ok = validateStep(step)
    if (!ok) return
    setDirection(1)
    setStep((s) => Math.min(s + 1, totalSteps - 1))
  }

  const goBack = () => {
    setDirection(-1)
    setStep((s) => Math.max(s - 1, 0))
  }

  const slideVariants = {
    initial: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    animate: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
  }

  const values = watch()

  const progressPct = ((step + 1) / totalSteps) * 100

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-wash border border-green-muted p-12 rounded-[32px] text-center"
      >
        <div className="w-20 h-20 bg-green-mid rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
          <Check size={40} strokeWidth={3} />
        </div>
        <h2 className="font-display text-[32px] text-maroon-deep mb-4">Request Received</h2>
        <p className="text-text-muted font-body text-balance max-w-sm mx-auto mb-8">
          Thank you. Our care coordinator will call you within 30 minutes to confirm your clinical requirements.
        </p>
        <button 
          onClick={() => { setIsSuccess(false); reset(); setStep(0); }}
          className="text-maroon-mid font-body font-bold text-sm hover:underline"
        >
          Submit another request
        </button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(async (values) => {
        setServerError(null)
        const formData = new FormData()
        formData.append('service_name', values.serviceType)
        formData.append('service_slug', values.serviceType.toLowerCase().replace(/ /g, '-'))
        formData.append('patient_name', values.name)
        formData.append('patient_condition', values.patientCondition)
        formData.append('address', values.address)
        formData.append('city', 'Gurgaon')
        formData.append('contact_name', values.name)
        formData.append('contact_phone', values.phone)
        formData.append('contact_email', values.email)
        formData.append('preferred_start_date', values.preferredStart.split('T')[0] || '')
        formData.append('preferred_time', values.preferredStart.split('T')[1] || '')
        
        // Map duration
        let durationType: 'hourly' | '12-hour' | '24x7' = 'hourly'
        if (values.duration === '12-Hour Shift') durationType = '12-hour'
        else if (values.duration === '24×7 Live-In') durationType = '24x7'
        formData.append('duration_type', durationType)

        const result = await submitBooking({ success: false, error: null, booking_id: null }, formData)
        
        if (result.success) {
          setIsSuccess(true)
        } else {
          setServerError(result.error || 'Something went wrong. Please try again.')
        }
      })}
      className="w-full"
    >
      {serverError && (
        <div className="mb-6 p-4 bg-maroon-pale border border-maroon-muted rounded-xl flex items-center gap-3 text-maroon-mid text-sm font-body">
          <AlertCircle size={18} />
          {serverError}
        </div>
      )}
      {/* Progress bar */}
      <div className="mb-8">
        <div className="h-2 w-full rounded-full bg-green-pale/60 overflow-hidden">
          <motion.div
            className="h-full bg-maroon-mid"
            initial={false}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.25 }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between gap-4">
          {steps.map((s, i) => {
            const active = i === step
            const done = i < step
            return (
              <div key={s.title} className="flex items-center gap-2">
                <div
                  className={[
                    'w-8 h-8 rounded-full flex items-center justify-center border font-display',
                    done ? 'bg-green-pale text-green-mid border-green-muted' : 'bg-white text-maroon-mid border-border',
                    active ? 'ring-2 ring-maroon-mid' : '',
                  ].join(' ')}
                >
                  {done ? <Check size={16} aria-hidden /> : <span>{i + 1}</span>}
                </div>
                <p className={active ? 'text-maroon-mid font-body font-medium text-sm' : 'text-text-muted text-sm font-body'}>
                  {s.title}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.25 }}
        >
          {/* Step 1 */}
          {step === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-text-muted text-sm font-body mb-2" htmlFor="serviceType">
                  Service type
                </label>
                <select
                  id="serviceType"
                  className="w-full rounded-md border border-border px-4 py-3 font-body text-sm bg-white"
                  aria-label="Service type"
                  {...register('serviceType')}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="mt-2 text-maroon-mid text-sm font-body">{errors.serviceType.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-text-muted text-sm font-body mb-2" htmlFor="patientCondition">
                  Patient condition
                </label>
                <input
                  id="patientCondition"
                  className="w-full rounded-md border border-border px-4 py-3 font-body text-sm"
                  placeholder="e.g. Post-surgery recovery / Mobility support / ICU needs"
                  aria-label="Patient condition"
                  {...register('patientCondition')}
                />
                {errors.patientCondition && (
                  <p className="mt-2 text-maroon-mid text-sm font-body">{errors.patientCondition.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-text-muted text-sm font-body mb-2" htmlFor="address">
                  Address
                </label>
                <textarea
                  id="address"
                  className="w-full rounded-md border border-border px-4 py-3 font-body text-sm min-h-[110px]"
                  placeholder="House no, locality, landmark, city"
                  aria-label="Address"
                  {...register('address')}
                />
                {errors.address && (
                  <p className="mt-2 text-maroon-mid text-sm font-body">{errors.address.message}</p>
                )}
              </div>

              <div>
                <label className="block text-text-muted text-sm font-body mb-2" htmlFor="preferredStart">
                  Preferred date/time
                </label>
                <input
                  id="preferredStart"
                  type="datetime-local"
                  className="w-full rounded-md border border-border px-4 py-3 font-body text-sm bg-white"
                  aria-label="Preferred date and time"
                  {...register('preferredStart')}
                />
                {errors.preferredStart && (
                  <p className="mt-2 text-maroon-mid text-sm font-body">{errors.preferredStart.message}</p>
                )}
              </div>

              <div>
                <label className="block text-text-muted text-sm font-body mb-2" htmlFor="duration">
                  Duration
                </label>
                <select
                  id="duration"
                  className="w-full rounded-md border border-border px-4 py-3 font-body text-sm bg-white"
                  aria-label="Duration"
                  {...register('duration')}
                >
                  <option value="">Select duration</option>
                  <option value="Hourly">Hourly</option>
                  <option value="12-Hour Shift">12-Hour Shift</option>
                  <option value="24×7 Live-In">24×7 Live-In</option>
                </select>
                {errors.duration && <p className="mt-2 text-maroon-mid text-sm font-body">{errors.duration.message}</p>}
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-text-muted text-sm font-body mb-2" htmlFor="name">
                  Your name
                </label>
                <input
                  id="name"
                  className="w-full rounded-md border border-border px-4 py-3 font-body text-sm"
                  placeholder="Full name"
                  aria-label="Your name"
                  {...register('name')}
                />
                {errors.name && <p className="mt-2 text-maroon-mid text-sm font-body">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-text-muted text-sm font-body mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  className="w-full rounded-md border border-border px-4 py-3 font-body text-sm"
                  placeholder="+91 ..."
                  aria-label="Phone number"
                  {...register('phone')}
                />
                {errors.phone && <p className="mt-2 text-maroon-mid text-sm font-body">{errors.phone.message}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-text-muted text-sm font-body mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="w-full rounded-md border border-border px-4 py-3 font-body text-sm"
                  placeholder="you@example.com"
                  aria-label="Email address"
                  {...register('email')}
                />
                {errors.email && <p className="mt-2 text-maroon-mid text-sm font-body">{errors.email.message}</p>}
              </div>

              <div className="md:col-span-2 bg-off-white border border-border rounded-[18px] p-5">
                <p className="font-body font-medium text-text-body mb-3">Your booking summary</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  <p className="text-sm text-text-muted font-body">
                    <span className="text-text-body font-medium">Service:</span> {values.serviceType}
                  </p>
                  <p className="text-sm text-text-muted font-body">
                    <span className="text-text-body font-medium">Condition:</span> {values.patientCondition}
                  </p>
                  <p className="text-sm text-text-muted font-body md:col-span-2">
                    <span className="text-text-body font-medium">Address:</span> {values.address}
                  </p>
                  <p className="text-sm text-text-muted font-body">
                    <span className="text-text-body font-medium">Start:</span> {values.preferredStart}
                  </p>
                  <p className="text-sm text-text-muted font-body">
                    <span className="text-text-body font-medium">Duration:</span> {values.duration}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0}
              className="px-6 py-3 rounded-md border border-border text-text-muted font-body text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Back
            </button>

            {step < totalSteps - 1 ? (
              <button
                type="button"
                onClick={goNext}
                className="px-6 py-3 rounded-md bg-maroon-mid text-white font-body text-sm hover:bg-maroon-soft transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-md bg-maroon-mid text-white font-body text-sm hover:bg-maroon-soft transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </form>
  )
}

