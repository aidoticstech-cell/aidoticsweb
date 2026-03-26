import { notFound } from 'next/navigation'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { blogPosts } from '@/lib/data'
import { ArrowLeft } from 'lucide-react'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <div className="pb-24">
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <Link href="/blog" className="inline-flex items-center gap-2 text-maroon-mid hover:underline font-body text-sm">
              <ArrowLeft size={16} /> Back to blog
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="relative w-full aspect-[16/9] bg-green-pale rounded-[18px] overflow-hidden border border-border">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>

            <div>
              <SectionLabel>{post.category}</SectionLabel>
              <h1 className="font-display font-light text-h2 text-maroon-deep mb-4">
                {post.title}
              </h1>
              <p className="text-text-muted font-body text-sm leading-relaxed mb-6">
                {post.date} · {post.readTime}
              </p>

              <div className="bg-off-white border border-border rounded-[18px] p-6">
                <p className="text-text-muted text-[14px] leading-relaxed">{post.excerpt}</p>
                <p className="text-text-muted text-[14px] leading-relaxed mt-4">
                  Article content will be added soon. For now, contact Aidotics for guidance tailored to your family.
                </p>
              </div>

              <div className="mt-6 flex gap-4 flex-wrap">
                <Button href="/contact" variant="primary">Book Free Assessment</Button>
                <Button href="https://wa.me/917303815461" variant="whatsapp">WhatsApp Us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

