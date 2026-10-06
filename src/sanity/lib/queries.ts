export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "category": category->title,
  publishedAt,
  readTime,
  coverImage
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "category": category->title,
  publishedAt,
  readTime,
  coverImage,
  body
}`;