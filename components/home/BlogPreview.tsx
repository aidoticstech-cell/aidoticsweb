'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/variants'
import SectionLabel from '@/components/ui/SectionLabel'
import { ArrowRight } from 'lucide-react'
import type { BlogPost } from '@/lib/supabase/types'

type BlogPreviewPost = Pick<BlogPost, 'id' | 'slug' | 'title' | 'excerpt' | 'category' | 'cover_image'>

export default function BlogPreview({ posts }: { posts: BlogPreviewPost[] }) {
  if (posts.length === 0) return null
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionLabel>From Our Experts</SectionLabel>
          <motion.h2 variants={fadeUp} className="font-display font-light text-h2 text-maroon-deep mb-12">
            Care Guides & Family Resources
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <motion.article
                key={post.slug}
                variants={fadeUp}
                className="group relative bg-white border border-border rounded-[24px] overflow-hidden hover:border-maroon-mid hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.cover_image || '/images/blog/placeholder.jpg'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Readability Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/80 via-maroon-deep/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  
                  {/* Overlaid Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start gap-2">
                    <span className="bg-green-pale text-green-mid text-[10px] uppercase tracking-[1px] font-body font-bold px-3 py-1 rounded-sm shadow-sm">
                      {post.category}
                    </span>
                    <h3 className="font-display font-light text-[22px] md:text-[24px] text-white leading-tight">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-text-muted text-[14px] leading-relaxed mb-6 line-clamp-2 italic font-body">
                    &quot;{post.excerpt}&quot;
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-maroon-mid text-sm font-body font-bold inline-flex items-center gap-2 group/btn"
                  >
                    Continue Reading 
                    <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-md border border-maroon-mid text-maroon-mid px-6 py-3 font-body text-sm hover:bg-maroon-pale transition-colors"
            >
              Visit Our Resource Centre <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

