import { createClient } from "@sanity/client";
import { services } from "../src/data/services";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function uploadImage(url: string, filename: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Image download failed: ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload("image", buffer, { filename });
  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
  };
}

async function main() {
  // Purana test document ("Yash") hatao
  const stale = await client.fetch<string[]>(
    `*[_type == "service" && name == "Yash"]._id`
  );
  for (const id of stale) {
    await client.delete(id);
    console.log("Deleted test doc:", id);
  }

  for (const [i, s] of services.entries()) {
    console.log("Importing:", s.name);
    const heroImage = await uploadImage(s.heroImage, `${s.slug}-hero.jpg`);
    const sideImage = await uploadImage(s.sideImage, `${s.slug}-side.jpg`);

    await client.createOrReplace({
      _id: `service-${s.slug}`,
      _type: "service",
      name: s.name,
      slug: { _type: "slug", current: s.slug },
      short: s.short,
      description: s.description,
      heroImage,
      sideImage,
      includes: s.includes,
      forWhom: s.forWhom,
      order: i + 1,
    });
  }
  console.log("Done!");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});