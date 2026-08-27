export type SaveSquadEpisode = {
  number: number;
  title: string;
  youtubeId: string;
  image: string;
  alt: string;
};

export const saveSquadEpisodes: SaveSquadEpisode[] = [
  {
    number: 1,
    title: "Karabo the Crow's Clever Plan",
    youtubeId: "gkjieiDAAEw",
    image: "/save-squad/episode-01-karabo.webp",
    alt: "Karabo the blue crow beside a savings jar under a tree",
  },
  {
    number: 2,
    title: "Annie the Ant and Greg the Grasshopper",
    youtubeId: "8j3GNZ9dh08",
    image: "/save-squad/episode-02-annie-greg.webp",
    alt: "Annie the ant with a wheelbarrow and Greg the grasshopper playing guitar",
  },
  {
    number: 3,
    title: "Thami the Tortoise and Lwazi the Hare",
    youtubeId: "TG5i_-rVQ9Q",
    image: "/save-squad/episode-03-thami-lwazi.webp",
    alt: "Thami the tortoise and Lwazi the hare standing together beneath a tree",
  },
  {
    number: 4,
    title: "Uncle Rajesh and the Hole Filled with His Gold",
    youtubeId: "S55YLUz2V58",
    image: "/save-squad/episode-04-uncle-rajesh.webp",
    alt: "Uncle Rajesh discovering a chest of gold beneath a mango tree",
  },
  {
    number: 5,
    title: "The Mango Tree and the Four Siblings",
    youtubeId: "XBJiQ3K05k4",
    image: "/save-squad/episode-05-mango-tree.webp",
    alt: "Four siblings standing beneath a fruit-filled mango tree",
  },
  {
    number: 6,
    title: "The Goose That Laid Golden Eggs",
    youtubeId: "9xVe7KPyLgY",
    image: "/save-squad/episode-06-golden-goose.webp",
    alt: "A young farmer and a white goose beside a glowing golden egg",
  },
  {
    number: 7,
    title: "Max the Dog, the Lion and the Sneaky Monkey",
    youtubeId: "NfboHLZ20eI",
    image: "/save-squad/episode-07-max-lion-monkey.webp",
    alt: "Max the dog facing a lion with a monkey perched on its back",
  },
  {
    number: 8,
    title: "Jasper and the Jiggly Juicy Steak",
    youtubeId: "hbIjNelh5IE",
    image: "/save-squad/episode-08-jasper.webp",
    alt: "Jasper the dog holding a steak beside a river",
  },
  {
    number: 9,
    title: "Baba the Oak and the River Reeds",
    youtubeId: "I3tXuWYskoc",
    image: "/save-squad/episode-09-baba-oak.webp",
    alt: "Baba the oak tree beside a river with mountains in the distance",
  },
  {
    number: 10,
    title: "Foxy Lunga and the Grapes in the Sky",
    youtubeId: "XWZX9eaqKm8",
    image: "/save-squad/episode-10-foxy-lunga.webp",
    alt: "Foxy Lunga leaping towards a bunch of grapes",
  },
];

export const saveSquadTestimonial: null | {
  quote: string;
  name: string;
  role: string;
} = {
  quote:
    "Chris Combrinck was the driving creative force behind the Save Squad animated series. His passion, creativity and commitment to excellence helped transform our financial literacy stories into an engaging 10-episode series that children can both enjoy and learn from. Chris was a true partner throughout the journey, always willing to go the extra mile to ensure the final product exceeded expectations. His enthusiasm and dedication brought our vision to life, creating a vibrant animated series that makes financial education accessible, engaging and memorable for children. Working with Chris was an absolute pleasure, and we are incredibly proud of what we achieved together.",
  name: "Joannie Maass",
  role: "Senior Technical Investment Specialist, Alexforbes",
};
