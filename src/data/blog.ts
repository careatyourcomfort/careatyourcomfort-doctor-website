export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "when-to-see-a-doctor-for-fever",
    title: "When should you see a doctor for a fever?",
    excerpt:
      "Most fevers settle on their own, but some need medical attention. Here is how to tell the difference.",
    category: "Health tips",
    date: "2026-09-28",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      "A fever is the body's natural response to infection, and in most adults it settles within a few days with rest and fluids. Still, there are situations where you should not wait it out.",
      "Speak to a doctor if the fever lasts more than three days, if the temperature is very high, or if it comes with severe headache, a stiff neck, difficulty breathing, persistent vomiting or a skin rash.",
      "Infants, older adults, pregnant women and people with long-term conditions such as diabetes or heart disease should be assessed sooner, since infections can become serious more quickly in these groups.",
      "A home visit is a good option when travelling to a clinic would be difficult, especially at night or when the patient is weak. The doctor can examine the patient, advise on medication and tell you if a hospital visit is needed.",
    ],
  },
  {
    slug: "benefits-of-home-doctor-visits",
    title: "5 benefits of a doctor's home visit",
    excerpt:
      "From comfort to continuity of care, here is why more families are choosing doctors who come to them.",
    category: "Home care",
    date: "2026-09-03",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1758691461990-03b49d969495?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      "Getting to a clinic is not always easy, especially when you are unwell, elderly or caring for a young child. A home visit removes that burden.",
      "First, it saves travel and waiting time. There is no traffic, no parking and no hours spent in a crowded waiting room.",
      "Second, patients are more relaxed in familiar surroundings, which often leads to more open conversations about symptoms and worries.",
      "Third, the doctor can see the home environment, which can reveal useful details about daily routine, diet and medication habits.",
      "Fourth, it is far more comfortable for elderly patients and those with limited mobility. Finally, families can be present together and ask questions in one visit.",
    ],
  },
  {
    slug: "managing-blood-pressure-at-home",
    title: "Simple ways to keep your blood pressure in check",
    excerpt:
      "Everyday habits that support healthy blood pressure, and why regular monitoring matters.",
    category: "Wellness",
    date: "2026-08-25",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1725870953863-4ad4db0acfc2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      "High blood pressure often has no obvious symptoms, which is why regular checks are important, particularly after the age of 40 or if it runs in your family.",
      "Everyday habits make a real difference. Reducing salt, staying physically active, keeping a healthy weight, limiting alcohol and avoiding tobacco all support healthier readings.",
      "If you have been prescribed medication, take it as advised even when you feel well. Stopping suddenly can cause readings to rise.",
      "Keeping a simple log of your readings and sharing it with your doctor helps them adjust treatment properly. Do not change or stop any medicine without medical advice.",
    ],
  },
  {
    slug: "caring-for-a-minor-wound-at-home",
    title: "How to care for a minor wound at home",
    excerpt:
      "Basic first steps for cuts and scrapes, and the warning signs that mean you should get it checked.",
    category: "First aid",
    date: "2026-08-14",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1609840534277-88833ef3ddeb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      "For a small cut or scrape, start by washing your hands, then rinse the wound gently under clean running water to remove dirt.",
      "Apply gentle pressure with a clean cloth to stop any bleeding, then cover the wound with a clean dressing. Change the dressing daily, or sooner if it becomes wet or dirty.",
      "See a doctor if the wound is deep, will not stop bleeding, has something embedded in it, or was caused by an animal bite or a rusty object.",
      "Also seek advice if you notice increasing redness, swelling, warmth, pus or fever in the days that follow, as these can be signs of infection.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
