type ContentType = "Game" | "Show" | "Movie" | "Anime";

interface Content {
    id: number,
    type: ContentType,
    title: string,
    image: any,
    progress?: number,
    rank?: number,
}

/* Arrays for the cards */
export const media: Content[] = [
  {
    id: 1,
    type: "Anime",
    title: "JJBA",
    image: require("../../assets/images/continue/show1.jpg"),
    progress: 60,
  },
  {
    id: 2,
    type: "Anime",
    title: "Saiki K",
    image: require("../../assets/images/continue/show2.jpg"),
    progress: 30,
  },
  {
    id: 3,
    type: "Anime",
    title: "Pokemon",
    image: require("../../assets/images/continue/show3.jpg"),
    progress: 80,
  },
  {
    id: 4,
    type: "Anime",
    title: "Steel Ball Run",
    image: require("../../assets/images/anime/animes1.jpg"),
  },
  {
    id: 5,
    type: "Anime",
    title: "Death Note",
    image: require("../../assets/images/anime/animes2.jpg"),
  },
  {
    id: 6,
    type: "Anime",
    title: "Sakamoto Days",
    image: require("../../assets/images/anime/animes3.jpg"),
  },

  {
    id: 7,
    type: "Game",
    title: "Solitaire",
    image: require("../../assets/images/games/games1.jpg"),
  },

  {
    id: 8,
    type: "Game",
    title: "Bloons td6",
    image: require("../../assets/images/games/games2.jpg"),
    rank: 1,
  },
  {
    id: 9,
    type: "Game",
    title: "Exploding Kittens",
    image: require("../../assets/images/games/games4.png"),
  },
  {
    id: 10,
    type: "Game",
    title: "Football Manager",
    image: require("../../assets/images/games/games3.png"),
    rank: 2,
  },
  {
    id: 11,
    type: "Game",
    title: "GTA 6",
    image: require("../../assets/images/games/games5.jpg"),
    rank: 3,
  },
];