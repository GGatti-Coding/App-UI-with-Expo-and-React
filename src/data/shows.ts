type ContentType = "Game" | "Show" | "Movie" | "Anime";

interface Content {
    id: number,
    type: ContentType,
    title: string,
    image: any,
    length?: number, // Minutes, will convert to hours later. ( For movies )
    episodes?: number, // Number of episodes. ( For shows and animes )
    progress?: number, // How far along in the episode or movie
    rank?: number, // For the games and movies/shows that are ranked
    description?: string, // A small description about the show, movie or game
}

/* Arrays for the cards */
export const media: Content[] = [
  {
    id: 1,
    type: "Anime",
    title: "JJBA",
    image: require("../../assets/images/continue/show1.jpg"),
    progress: 60,
    rank: 1,
    description: "Placeholder",
  },
  {
    id: 2,
    type: "Anime",
    title: "Saiki K",
    image: require("../../assets/images/continue/show2.jpg"),
    progress: 30,
    description: "Placeholder",
  },
  {
    id: 3,
    type: "Anime",
    title: "Pokemon",
    image: require("../../assets/images/continue/show3.jpg"),
    progress: 80,
    description: "Placeholder",
  },
  {
    id: 4,
    type: "Anime",
    title: "Steel Ball Run",
    image: require("../../assets/images/anime/animes1.jpg"),
    description: "Placeholder",
  },
  {
    id: 5,
    type: "Anime",
    title: "Death Note",
    image: require("../../assets/images/anime/animes2.jpg"),
    rank: 2,
    description: "Placeholder",
  },
  {
    id: 6,
    type: "Anime",
    title: "Sakamoto Days",
    image: require("../../assets/images/anime/animes3.jpg"),
    description: "Placeholder",
  },
  {
    id: 7,
    type: "Game",
    title: "Solitaire",
    image: require("../../assets/images/games/games1.jpg"),
    description: "Placeholder",
  },
  {
    id: 8,
    type: "Game",
    title: "Bloons td6",
    image: require("../../assets/images/games/games2.jpg"),
    rank: 1,
    description: "Placeholder",
  },
  {
    id: 9,
    type: "Game",
    title: "Exploding Kittens",
    image: require("../../assets/images/games/games4.png"),
    description: "Placeholder",
  },
  {
    id: 10,
    type: "Game",
    title: "Football Manager",
    image: require("../../assets/images/games/games3.png"),
    rank: 2,
    description: "Placeholder",
  },
  {
    id: 11,
    type: "Game",
    title: "GTA 6",
    image: require("../../assets/images/games/games5.jpg"),
    rank: 3,
    description: "Placeholder",
  },
];