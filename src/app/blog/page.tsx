import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { site } from "@/data/site";
import { posts } from "@/data/blog";
import { Reveal } from "@/components/Reveal";
import { BlogImage } from "@/components/BlogImage";

export const metadata: Metadata = {
  title: "Blog",
  description: `Health tips and guidance from ${site.name}, doctor home visits in ${site.location}.`,
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = posts;

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
            <div className="overflow-hidden">
              <BlogImage
                src={featured.image}
                alt={featured.title}
                priority
                className="h-full min-h-[220px] w-full transition-transform duration-500 group-hover:scale-105 lg:min-h-[320px]"
              />
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
                  {formatDate(featured.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  {featured.readTime}
                </span>
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
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <h2 className="text-2xl font-bold">Latest articles</h2>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, index) => (
            <Reveal key={post.slug} delay={index * 120} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="overflow-hidden">
                  <BlogImage
                    src={post.image}
                    alt={post.title}
                    className="h-44 w-full transition-transform duration-500 group-hover:scale-105"
                  />
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
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}