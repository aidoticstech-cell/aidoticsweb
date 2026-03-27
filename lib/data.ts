export const services = [
  {
    slug: 'elder-care',
    name: 'Elder Care',
    tagline: 'Full-time companions for your aging loved ones',
    icon: 'Heart',
    color: 'green',
    image: '/images/services/elder-care.jpg',
    includes: [
      '24×7 companionship and supervision',
      'Medication reminders and management',
      'Mobility and transfer assistance',
      'Personal hygiene support',
      'Vital signs monitoring',
      'Coordination with family and doctors',
    ],
    forWhom: ['Seniors living alone', 'Post-hospitalization elderly', 'Dementia / Alzheimer\'s patients'],
    plans: [
      { name: 'Hourly Base Service' },
      { name: '12-Hour Shift' },
      { name: '24×7 Live-In' },
    ],
    faqs: [
      { q: 'Are caregivers trained for dementia patients?',         a: 'Yes. All our caregivers receive specialised dementia and Alzheimer\'s care training.' },
      { q: 'Can I change the caregiver if I\'m not satisfied?',     a: 'Absolutely. We will arrange a replacement within 24 hours, no questions asked.' },
    ],
  },
  {
    slug: 'post-surgery-care',
    name: 'Post-Surgery Care',
    tagline: 'Safe, comfortable recovery at home',
    icon: 'Stethoscope',
    color: 'maroon',
    image: '/images/services/post-surgery-care.jpg',
    includes: ['Wound dressing and care', 'Post-op medication management', 'Physiotherapy coordination', 'Diet and nutrition support', 'Doctor follow-up scheduling'],
    forWhom: ['Orthopaedic surgery patients', 'Cardiac surgery recovery', 'Abdominal surgery patients'],
    plans: [
      { name: 'Hourly Base Service' },
      { name: '12-Hour Shift' },
      { name: '24×7 Live-In' },
    ],
    faqs: [],
  },
  {
    slug: 'icu-at-home',
    name: 'ICU at Home',
    tagline: 'Critical care nursing with equipment support',
    icon: 'Activity',
    color: 'green',
    image: '/images/services/icu-at-home.jpg',
    includes: ['Ventilator management', 'Continuous vitals monitoring', 'IV line care', 'Suction management', 'Medical equipment coordination'],
    forWhom: ['Ventilator-dependent patients', 'Coma / neuro patients', 'Post-ICU step-down care'],
    plans: [
      { name: 'Hourly Base Service' },
      { name: '12-Hour Shift' },
      { name: '24×7 Live-In' },
    ],
    faqs: [],
  },
  {
    slug: 'baby-mother-care',
    name: 'Baby & Mother Care',
    tagline: 'Postnatal nurses and newborn support',
    icon: 'Baby',
    color: 'maroon',
    image: '/images/services/baby-mother-care.jpg',
    includes: ['Newborn bathing and hygiene', 'Lactation guidance', 'Mother postnatal recovery', 'Infant feeding support', 'Night duty care'],
    forWhom: ['New mothers (C-section and natural birth)', 'Premature babies', 'First-time parents'],
    plans: [
      { name: 'Hourly Base Service' },
      { name: '12-Hour Shift' },
      { name: '24×7 Live-In' },
    ],
    faqs: [],
  },
  {
    slug: 'professional-nurse',
    name: 'Professional Nurse',
    tagline: 'Certified clinical care for complex medical needs',
    icon: 'Stethoscope',
    color: 'green',
    image: '/images/services/professional-nurse.jpg',
    includes: [
      'Suctioning / Tracheostomy care',
      'Ryle’s tube insertion / Removal of Ryle’s tube',
      'Ventilator support',
      'Tracheostomy Insertion / Removal Tracheostomy',
      'ICU/Home Critical Care',
      'NICU Trained'
    ],
    forWhom: [
      'Post-surgery recovery care',
      'Patients with chronic illnesses like Diabetes or Hypertension',
      'Injection and IV medication administration',
      'Wound dressing and infection management',
      'Monitoring vital signs such as blood pressure, oxygen, and temperature',
      'Care for stroke or paralysis patients'
    ],
    plans: [
      { name: 'Hourly Base Service' },
      { name: '12-Hour Shift' },
      { name: '24×7 Live-In' },
    ],
    faqs: [],
  },
  {
    slug: 'semi-nurse',
    name: 'Semi-Nurse',
    tagline: 'Skilled assistance for daily medical and personal care',
    icon: 'HeartHandshake',
    color: 'maroon',
    image: '/images/services/semi-nurse.jpg',
    includes: [
      'Wound dressing',
      'Catheter care',
      'Injection (IV/IM/SC)',
      'Oxygen cylinder handling / Oxygen concentrator',
      'IV Cannulation',
      'BIPAP / CPAP',
      'Ryle’s tube feeding',
      'Suctioning / Tracheostomy care'
    ],
    forWhom: [
      'Patients recovering after hospital discharge',
      'Bedridden patients needing health monitoring',
      'Patients who need regular BP, temperature, or oxygen checks',
      'Long-term elderly care with mild medical needs'
    ],
    plans: [
      { name: 'Hourly Base Service' },
      { name: '12-Hour Shift' },
      { name: '24×7 Live-In' },
    ],
    faqs: [],
  },
  {
    slug: 'attendant',
    name: 'Attendant',
    tagline: 'Dedicated personal care and daily living support',
    icon: 'Users',
    color: 'green',
    image: '/images/services/attendant.jpg',
    includes: [
      'Basic vital monitoring (BP, pulse, temperature)',
      'Blood sugar checking (glucometer)',
      'Medicine administration (oral)',
      'Bedridden patient',
      'Nebulizer use',
      'Insulin',
      'Patient Bathing',
      'Feeding',
      'Toileting / Diaper Care',
      'Mechanical Lifts of patient'
    ],
    forWhom: [
      'Elderly parents living alone who need daily assistance',
      'Help with bathing, grooming, and mobility',
      'Support for feeding and medication reminders',
      'Assistance for patients recovering from surgery',
      'Bedridden patients needing regular monitoring',
      'Companionship and emotional support for seniors'
    ],
    plans: [
      { name: 'Hourly Base Service' },
      { name: '12-Hour Shift' },
      { name: '24×7 Live-In' },
    ],
    faqs: [],
  },
]

export const testimonials = [
  {
    text: 'The caregiver they sent for my father was not just professional but genuinely caring. Within a week, my father was eating better, sleeping through the night, and actually looking forward to the day. Like a family member arrived at our home.',
    name: 'Rohit Sharma',
    location: 'DLF Phase 2, Gurgaon',
    service: 'Elder Care',
    rating: 5,
  },
  {
    text: 'I called Aidotics at 10pm after my mother\'s surgery. By 1am, a certified nurse was at our door. She managed dressing changes, medications, and physiotherapy coordination without me having to think about a single thing.',
    name: 'Priya Kapoor',
    location: 'Sector 54, Gurgaon',
    service: 'Post-Surgery Care',
    rating: 5,
  },
  {
    text: 'After my stroke, I was terrified of recovery. The skilled support from Aidotics came home and made me feel safe. Six weeks later I walked unaided for the first time. I cannot thank this team enough.',
    name: 'Arun Mehta',
    location: 'South Delhi',
    service: 'Semi-Nurse',
    rating: 5,
  },
  {
    text: 'We needed a night nurse for our newborn and Aidotics sent someone within 4 hours. She was patient, experienced, and helped my wife with breastfeeding. Best decision we made as new parents.',
    name: 'Vikram Sood',
    location: 'Cyber City, Gurgaon',
    service: 'Baby & Mother Care',
    rating: 5,
  },
  {
    text: 'The nursing team handled my father\'s final weeks with such grace and dignity. They made sure he was comfortable and that our family was supported every single day. We are deeply grateful.',
    name: 'Sunita Batra',
    location: 'Faridabad, Haryana',
    service: 'Professional Nurse',
    rating: 5,
  },
]

export const stats = [
  { value: 2400, suffix: '+',    label: 'Families Served'    },
  { value: 98,   suffix: '%',    label: 'Satisfaction Rate'  },
  { value: 3,    suffix: ' Hrs', label: 'Average Deployment' },
  { value: 500,  suffix: '+',    label: 'Verified Staff'     },
]

export const howItWorks = [
  { step: '01', title: 'Enquire',  desc: 'Call, WhatsApp or fill the form — takes 2 minutes.'    },
  { step: '02', title: 'Assess',   desc: 'Free care needs evaluation by our clinical team.'       },
  { step: '03', title: 'Match',    desc: 'We select the ideal caregiver for your exact needs.'    },
  { step: '04', title: 'Deploy',   desc: 'Caregiver arrives at your door, usually within 3 hours.'},
]

export const blogPosts = [
  {
    slug:     'caring-for-elderly-parents',
    title:    'A Complete Guide to Caring for Elderly Parents at Home',
    category: 'Elder Care',
    excerpt:  'Whether your parent has just returned from hospital or is aging in place, here is how to make home care work.',
    date:     '2026-02-10',
    readTime: '6 min',
    image:    '/images/blog/elderly.jpg',
  },
  {
    slug:     'post-surgery-recovery-tips',
    title:    'What to Expect in the First 2 Weeks After Surgery',
    category: 'Recovery',
    excerpt:  'Post-surgical recovery at home is possible with the right support. Here is a week-by-week guide.',
    date:     '2026-01-28',
    readTime: '5 min',
    image:    '/images/blog/recovery.jpg',
  },
  {
    slug:     'choosing-a-home-caregiver',
    title:    'How to Choose the Right Home Caregiver for Your Family',
    category: 'Tips',
    excerpt:  'Not all caregivers are the same. Here are the 7 things every family should verify before hiring.',
    date:     '2026-01-15',
    readTime: '7 min',
    image:    '/images/blog/caregiver.jpg',
  },
]

export const faqs = [
  {
    category: 'About Aidotics',
    items: [
      { q: 'What services does Aidotics Elder Care provide?', a: 'Aidotics Elder Care provides trained attendants, caregivers, semi-nurses, and professional nurses for home healthcare. Our services include elderly care, post-hospitalization care, ICU setup at home, and daily assistance for patients who need medical or personal support.' },
      { q: 'When should I hire a caregiver or attendant?', a: 'Families usually hire caregivers when a loved one needs help with daily activities such as bathing, feeding, mobility assistance, medication reminders, or companionship. This is common for elderly patients, bedridden individuals, or people recovering from surgery.' },
      { q: 'What is the difference between a nurse and an attendant?', a: 'A nurse is medically trained and can perform clinical tasks such as injections, wound dressing, IV medication, and patient monitoring. An attendant focuses on daily care activities such as hygiene, feeding, mobility support, and basic patient assistance.' },
      { q: 'Can medical care be provided at home instead of in a hospital?', a: 'Yes. Many medical services can be safely provided at home, including nursing care, post-surgery monitoring, and even ICU-level support depending on the patient’s condition.' },
      { q: 'Do you provide ICU setup at home?', a: 'Yes. Aidotics can help arrange an ICU-like setup at home for patients who require advanced monitoring after hospital discharge. This may include oxygen support, medical equipment, and trained nursing staff.' },
      { q: 'Are all staff police verified and trained?', a: 'Yes. Every caregiver undergoes full police verification and professional screening before being deployed to ensure safety and reliability for families.' },
      { q: 'How long has Aidotics been operating?', a: 'Aidotics has been serving families across Gurgaon and Delhi NCR since 2021.' },
      { q: 'Are you available on weekends and public holidays?', a: 'Yes. We operate 24 hours a day, 7 days a week, 365 days a year.' },
    ],
  },
  {
    category: 'Booking & Pricing',
    items: [
      { q: 'How quickly can a caregiver or nurse be arranged?', a: 'In most cases, we can arrange trained staff within 24–48 hours depending on the location and complexity. However, for many standard requirements, our average deployment time is under 3 hours.' },
      { q: 'Can services be booked for short-term care?', a: 'Yes. We provide both short-term and long-term care services depending on the patient’s needs, including recovery after surgery or temporary medical assistance.' },
      { q: 'How do I book a caregiver or nurse from Aidotics?', a: 'You can contact us through our website, phone number, or enquiry form. Our team will understand the patient’s condition and help you choose the most suitable care service.' },
      { q: 'Is there a minimum booking duration?', a: 'For hourly bookings, the minimum is 4 hours. Shift and live-in bookings have no minimum beyond 1 day.' },
      { q: 'Do you offer any corporate tie-ups?', a: 'Yes. We have corporate health packages for companies. Contact us for bulk pricing.' },
    ],
  },
  {
    category: 'Caregivers',
    items: [
      { q: 'Do you provide services for elderly patients living alone?', a: 'Yes. Many families hire our attendants to support elderly parents who live alone and need assistance with daily activities, medication reminders, and companionship.' },
      { q: 'Can I choose my caregiver?', a: 'You can view caregiver profiles and express preferences. We make the final match based on clinical fit.' },
      { q: 'What happens if I am unhappy?', a: 'Contact us and we will replace the caregiver within 24 hours — no extra charge, no questions asked.' },
    ],
  },
]

