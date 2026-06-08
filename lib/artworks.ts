export type Artwork = {
  slug: string;
  title: string;
  image: string;
  year?: string;
  category?: string;
  story?: string;
  description?: string;
  featured?: boolean;
};

export const artworks: Artwork[] = [
  {
    slug: "bookworm",
    title: "Bookworm",
    image: "/images/artwork/bookworm.png",
  },
  {
    slug: "lil-bean",
    title: "Lil Bean",
    image: "/images/artwork/lil-bean.png",
  },
  {
    slug: "lil-gnocchs",
    title: "Lil Gnocchs",
    image: "/images/artwork/lil-gnocchs.png",
  },
  {
    slug: "night-at-bear-mountain",
    title: "Night At Bear Mountain",
    image: "/images/artwork/night-at-bear-mountain.png",
  },
  {
    slug: "on-the-steps",
    title: "On The Steps",
    image: "/images/artwork/on-the-steps.png",
  },
  {
    slug: "portrait-01",
    title: "Portrait 01",
    image: "/images/artwork/portrait-01.png",
  },
  {
    slug: "post-surgery",
    title: "Post Surgery",
    image: "/images/artwork/post-surgery.png",
  },
  {
    slug: "rainy-day",
    title: "Rainy Day",
    image: "/images/artwork/rainy-day.png",
  },
  {
    slug: "sleeping-in-the-sun",
    title: "Sleeping in the Sun",
    image: "/images/artwork/sleeping-in-the-sun.png",
  },
  {
    slug: "waiting",
    title: "Waiting",
    image: "/images/artwork/waiting.png",
  },
  {
    slug: "wedding",
    title: "Wedding",
    image: "/images/artwork/wedding.png",
  },
  {
    slug: "weekend-with-grandma-and-grandpa",
    title: "Weekend With Grandma and Grandpa",
    image: "/images/artwork/weekend-with-grandma-and-grandpa.png",
  },
  {
    slug: "winter-in-weymouth",
    title: "Winter in Weymouth",
    image: "/images/artwork/winter-in-weymouth.png",
  },
];