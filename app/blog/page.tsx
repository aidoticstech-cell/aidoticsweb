import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionLabel from '../../components/ui/SectionLabel'
import { blogPosts } from '../../lib/data'
import { ArrowRight } from 'lucide-react'

export default function BlogIndexPage() {
  return (
    <div className="pb-24">
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionLabel>From Our Experts</SectionLabel>
          <h1 className="font-display font-light text-h2 text-maroon-deep mb-4">
            Care Guides & Family Resources
          </h1>
          <p className="text-text-muted font-body text-sm leading-relaxed max-w-2xl">
            Practical, compassionate guides designed for families caring at home.
          </p>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-[18px] border border-border overflow-hidden">
                <div className="relative w-full aspect-[16/9] bg-green-pale">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>

                <div className="p-6">
                  <div className="inline-flex items-center bg-green-pale text-green-mid text-[11px] font-body font-medium px-3 py-1 rounded-full mb-4">
                    {post.category}
                  </div>
                  <h2 className="font-body font-medium text-[16px] text-text-body leading-snug mb-3">
                    {post.title}
                  </h2>
                  <p className="text-text-muted text-[13px] leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="text-maroon-mid text-sm font-body inline-flex items-center gap-2 hover:underline">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/blog" className="inline-flex items-center gap-2 rounded-md border border-maroon-mid text-maroon-mid px-6 py-3 font-body text-sm hover:bg-maroon-pale transition-colors">
              Visit Our Resource Centre <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

