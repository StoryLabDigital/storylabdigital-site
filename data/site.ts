export const siteConfig = {
  name: "StoryLabDigital",
  shortName: "SLD",
  url: "https://www.storylabdigital.co.za",
  email: "hello@storylabdigital.co.za",
  labEmail: "thelab@storylabdigital.co.za",
  location: "Cape Town",
  availability: "Working worldwide",

  positioning: {
    primary: "Ideas Worth Remembering.",
    secondary: "Independent Creative Studio.",
    tertiary: "Different. On Purpose.",
  },

  social: {
    linkedin:
      "https://www.linkedin.com/in/chris-combrinck-9060891b8",
  },

  assets: {
    icon: "/icon.png",
    openGraph: "/og-image.jpg",
    fieldNotesPdf:
      "/field-notes/StoryLabDigital_FieldNotes_Issue001_Interactive.pdf",
    fieldNotesCover: "/posters/whatif.jpeg",
    whatIfVideo: "/videos/whatif.mp4",
    whatIfPoster: "/posters/whatif.jpeg",
  },
} as const;

export const primaryNavigation = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Field Notes",
    href: "/field-notes",
  },
  {
    label: "The Lab",
    href: "/the-lab",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export const clients = [
  {
    name: "Alexander Forbes",
    logo: "/logos/alexander-forbes.png",
  },
  {
    name: "EBnet",
    logo: "/logos/ebnet.png",
  },
  {
    name: "ICTS",
    logo: "/logos/icts.png",
  },
  {
    name: "ICTS Academy",
    logo: "/logos/ICTS Academy Logo.png",
  },
  {
    name: "Datagr8",
    logo: "/logos/datagr8.png",
  },
  {
    name: "Motswedi",
    logo: "/logos/motswedi.png",
  },
  {
    name: "BonaFide Moto Co.",
    logo: "/logos/bonofide.png",
  },
  {
    name: "Fairheads",
    logo: "/logos/fh-logo.png",
  },
] as const;

export const testimonials = [
  {
    quote:
      "What impressed us most was not just the final product, but the way Chris approached every challenge. StoryLabDigital feels less like an external service provider and more like an extension of your team.",
    name: "Leon",
    role: "COO",
    company: "EBnet",
  },
  {
    quote:
      "Working with Chris and StoryLabDigital has been an absolute game changer. The ability to take complex ideas and turn them into engaging visual stories is something truly unique.",
    name: "Justin",
    role: "CTO",
    company: "Datagr8",
  },
] as const;