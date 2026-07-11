export type WorkCategory =
  | "Campaign"
  | "Corporate"
  | "Cyber Awareness"
  | "Explainer"
  | "Learning"
  | "Promo";

export type WorkItem = {
  slug: string;
  title: string;
  client: string;
  category: WorkCategory;
  video: string;
  poster: string;
  featured: boolean;
  description: string;
};

export const workItems: WorkItem[] = [
  {
    slug: "what-if",
    title: "What If",
    client: "StoryLabDigital",
    category: "Campaign",
    video: "/videos/whatif.mp4",
    poster: "/posters/whatif.jpeg",
    featured: true,
    description:
      "A question-led brand film built around curiosity, possibility and the decision to think differently.",
  },
  {
    slug: "save-squad",
    title: "Save Squad",
    client: "Alexander Forbes",
    category: "Learning",
    video: "/videos/save-squad.mp4",
    poster: "/posters/save-squad.jpeg",
    featured: true,
    description:
      "A youth-focused animated learning series designed to make financial lessons easier to understand and harder to forget.",
  },
  {
    slug: "reforms-in-the-roar",
    title: "Reforms in the Roar",
    client: "Motswedi",
    category: "Explainer",
    video: "/videos/reforms-in-the-roar.mp4",
    poster: "/posters/reforms-in-the-roar.jpeg",
    featured: true,
    description:
      "A visual explainer that turns complex reform themes into a clear, engaging narrative.",
  },
  {
    slug: "clickbait-chaos",
    title: "Clickbait Chaos",
    client: "Datagr8",
    category: "Cyber Awareness",
    video: "/videos/clickbait-chaos.mp4",
    poster: "/posters/clickbait-chaos.jpeg",
    featured: true,
    description:
      "A fast-moving cyber-awareness piece showing how easily attention can be manipulated online.",
  },
  {
    slug: "kayak-and-hippo",
    title: "Kayak & Hippo",
    client: "EBnet",
    category: "Campaign",
    video: "/videos/kayak-hippo.mp4",
    poster: "/posters/kayak-hippo.jpeg",
    featured: false,
    description:
      "A playful campaign film using an unexpected visual idea to turn a business message into something memorable.",
  },
  {
    slug: "cofi",
    title: "CoFi",
    client: "EBnet",
    category: "Promo",
    video: "/videos/cofi.mp4",
    poster: "/posters/cofi.jpeg",
    featured: false,
    description:
      "A sharp promotional film designed to create interest around a complex financial topic.",
  },
  {
    slug: "wifi-trap",
    title: "WiFi Trap",
    client: "Datagr8",
    category: "Cyber Awareness",
    video: "/videos/wifi-trap.mp4",
    poster: "/posters/wifi-trap.jpeg",
    featured: false,
    description:
      "A cyber-awareness story built to make the risks of unsecured public Wi-Fi feel immediate and real.",
  },
  {
    slug: "impersonation-invasion",
    title: "Impersonation Invasion",
    client: "Datagr8",
    category: "Cyber Awareness",
    video: "/videos/impersonation-invasion.mp4",
    poster: "/posters/impersonation-invasion.jpeg",
    featured: false,
    description:
      "A visual warning about digital impersonation, social engineering and the speed at which trust can be exploited.",
  },
  {
    slug: "ebnet-top-gun",
    title: "EBnet: Top Gun",
    client: "EBnet",
    category: "Promo",
    video: "/videos/ebnet-top-gun.mp4",
    poster: "/posters/ebnet-top-gun.jpeg",
    featured: false,
    description:
      "A cinematic promotional concept using a familiar cultural reference to create energy and attention.",
  },
  {
    slug: "seeds-of-growth",
    title: "Seeds of Growth",
    client: "Motswedi",
    category: "Corporate",
    video: "/videos/seeds-of-growth.mp4",
    poster: "/posters/seeds-of-growth.jpeg",
    featured: false,
    description:
      "A corporate storytelling piece centred on growth, long-term value and shared progress.",
  },
  {
    slug: "thriller-webinar",
    title: "Thriller Webinar",
    client: "EBnet",
    category: "Promo",
    video: "/videos/thriller-webinar.mp4",
    poster: "/posters/thriller-webinar.jpeg",
    featured: false,
    description:
      "A deliberately unconventional webinar promotion designed to interrupt the ordinary.",
  },
  {
    slug: "motswedi-corporate-video",
    title: "Motswedi Corporate Film",
    client: "Motswedi",
    category: "Corporate",
    video: "/videos/motswedi-corporate-video.mp4",
    poster: "/posters/motswedi-corporate-video.jpeg",
    featured: false,
    description:
      "A corporate film created to communicate capability, people and purpose with clarity.",
  },
  {
    slug: "af-karabo",
    title: "Karabo the Clever Crow",
    client: "Alexander Forbes",
    category: "Learning",
    video: "/videos/af-karabo.mp4",
    poster: "/posters/af-karabo.jpeg",
    featured: false,
    description:
      "An animated financial-learning story created as part of the Save Squad series.",
  },
  {
    slug: "aer",
    title: "AER",
    client: "StoryLabDigital",
    category: "Campaign",
    video: "/videos/AER.mp4",
    poster: "/posters/AER.jpeg",
    featured: false,
    description:
      "A stylised campaign experiment exploring atmosphere, movement and visual identity.",
  },
];

export const featuredWork = workItems.filter((item) => item.featured);

export const workCategories = [
  "All",
  "Campaign",
  "Corporate",
  "Cyber Awareness",
  "Explainer",
  "Learning",
  "Promo",
] as const;