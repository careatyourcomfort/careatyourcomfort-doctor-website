import { defineType, defineField } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
      defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Click the Generate button to create the web address automatically from the title.",
      options: { source: "title", maxLength: 96, isUnique: () => true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A short summary shown on the blog list page.",
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Read time",
      type: "string",
      description: "e.g. 3 min read",
      initialValue: "3 min read",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      subtitle: "category.title",
    },
  },
});
