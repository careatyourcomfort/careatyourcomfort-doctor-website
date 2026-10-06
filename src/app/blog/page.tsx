import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { site } from "@/data/site";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { postsQuery } from "@/sanity/lib/queries";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description: `Health tips and guidance from ${site.name}, doctor home visits in ${site.location}.`,
};

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime?: string;
  coverImage?: { asset?: { _ref: string } };
};

export const revalidate = 60;

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery);

  if (posts.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="mt-4 text-muted-foreground">
          No articles have been published yet. Check back soon.
        </p>
      </main>
    );
  }

  const [featured, ...rest] = posts;
  const featuredImg = featured.coverImage
    ? urlFor(featured.coverImage).width(1200).url()
    : null;

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-teal-700 via-teal-600 to-cyan-600 text-white">
        <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 size-[28rem] rounded-full bg-highlight/30 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
              <BookOpen className="size-4" />
              Our blog
            </span>
            <h1 className="mt-5 text-4xl font-bold sm:text-6xl">
              Health tips and guidance
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
              Simple, practical advice from our doctors to help you and your
              family stay well.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured post */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 lg:grid-cols-2"
          >
            <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-linear-to-br from-teal-600 to-cyan-600 lg:min-h-[320px]">
              {featuredImg ? (
                <Image
                  src={featuredImg}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 50vm, 100vm"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <BookOpen className="size-16 text-white/90 transition-transform duration-500 group-hover:scale-110" />
              )}
            </div>

            <div className="p-8 sm:p-10">
              <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                {featured.category}
              </span>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-3.5" />
                  {formatDate(featured.publishedAt)}
                </span>
                {featured.readTime && (
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {featured.readTime}
                  </span>
                )}
              </div>

              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read article
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* Post grid */}
      {rest.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <h2 className="text-2xl font-bold">Latest articles</h2>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, index) => {
              const img = post.coverImage
                ? urlFor(post.coverImage).width(800).url()
                : null;
              return (
                <Reveal key={post._id} delay={index * 120} className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="relative flex h-40 items-center justify-center overflow-hidden bg-linear-to-br from-teal-600 to-cyan-600">
                      {img ? (
                        <Image
                          src={img}
                          alt={post.title}
                          fill
                          sizes="(min-width: 1024px) 33vm, (min-width: 768px) 50vm, 100vm"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <BookOpen className="size-10 text-white/90 transition-transform duration-500 group-hover:scale-110" />
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <span className="inline-block w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                        {post.category}
                      </span>
                      <h3 className="mt-3 text-lg font-bold">{post.title}</h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground">
                        {post.excerpt}
                      </p>

                      <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="size-3.5" />
                          {formatDate(post.publishedAt)}
                        </span>
                        {post.readTime && (
                          <span className="flex items-center gap-1.5">
                            <Clock className="size-3.5" />
                            {post.readTime}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}