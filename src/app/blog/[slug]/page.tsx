import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { site } from "@/data/site";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { postsQuery, postBySlugQuery } from "@/sanity/lib/queries";
import { Reveal } from "@/components/Reveal";
import { BookButton } from "@/components/booking/BookButton";

type Props = {
  params: Promise<{ slug: string }>;
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
  body: unknown;
};

export const revalidate = 60;

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mt-4">{children}</p>,
    h2: ({ children }) => (
      <h2 className="mt-8 text-2xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 text-xl font-bold">{children}</h3>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6">{children}</ul>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="relative mt-6 h-72 overflow-hidden rounded-2xl sm:h-96">
        <Image
          src={urlFor(value).width(1200).url()}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    ),
  },
};

export async function generateStaticParams() {
  const posts: { slug: string }[] = await client.fetch(postsQuery);
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post: Post | null = await client.fetch(postBySlugQuery, { slug });

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post: Post | null = await client.fetch(postBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  const allPosts: Post[] = await client.fetch(postsQuery);
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const coverUrl = post.coverImage
    ? urlFor(post.coverImage).width(1600).url()
    : null;

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden text-white">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={post.title}
            fill
            priority
            className="absolute inset-0 -z-10 object-cover"
          />
        ) : (
          <div className="absolute inset-0 -z-10 bg-linear-to-br from-teal-700 via-teal-600 to-cyan-600" />
        )}
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-teal-950/95 via-teal-900/70 to-teal-800/40" />

        <div className="relative mx-auto max-w-4xl px-4 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to blog
          </Link>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-10 sm:pb-24 sm:pt-16">
          <Reveal>
            <span className="inline-block rounded-full bg-highlight px-4 py-1.5 text-sm font-semibold text-highlight-foreground">
              {post.category}
            </span>

            <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
              <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur">
                <Calendar className="size-4" />
                {formatDate(post.publishedAt)}
              </span>
              {post.readTime && (
                <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur">
                  <Clock className="size-4" />
                  {post.readTime}
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-4 py-14 sm:py-16">
        <Reveal>
          <p className="border-l-4 border-primary pl-4 text-lg text-muted-foreground">
            {post.excerpt}
          </p>
        </Reveal>

        <Reveal className="mt-8 text-base leading-relaxed text-foreground">
          <PortableText value={post.body} components={portableTextComponents} />
        </Reveal>

        <Reveal>
          <p className="mt-10 rounded-xl border bg-secondary/40 p-4 text-sm text-muted-foreground">
            This article is for general awareness only and is not a substitute
            for professional medical advice. If you are unwell, please consult
            a doctor.
          </p>
        </Reveal>
      </article>

      {/* Book CTA */}
      <section className="px-4 pb-16">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-linear-to-br from-teal-700 via-teal-600 to-cyan-600 px-6 py-12 text-center text-white sm:px-12">
            <div className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-cyan-300/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 size-72 rounded-full bg-highlight/30 blur-3xl" />

            <div className="relative">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Need a doctor at home?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-white/85">
                Book a home visit in {site.location} for ₹{site.fee}.
              </p>
              <div className="mt-6">
                <BookButton
                  size="lg"
                  className="bg-highlight text-highlight-foreground hover:-translate-y-0.5 hover:bg-highlight/90"
                >
                  Book Home Visit
                </BookButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <Reveal>
              <h2 className="text-2xl font-bold">Keep reading</h2>
            </Reveal>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((item, index) => (
                <Reveal key={item._id} delay={index * 120} className="h-full">
                  <Link
                    href={`/blog/${item.slug}`}
                    className="group flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                      <BookOpen className="size-3.5" />
                      {item.category}
                    </span>
                    <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">
                      {item.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read article
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}