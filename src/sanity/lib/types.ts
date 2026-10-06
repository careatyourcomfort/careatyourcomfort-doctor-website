type SanityImageRef = { asset?: { _ref: string } };

export type Service = {
  _id: string;
  name: string;
  slug: string;
  short: string;
  description: string;
  heroImage?: SanityImageRef;
  sideImage?: SanityImageRef;
  includes: string[];
  forWhom: string[];
};