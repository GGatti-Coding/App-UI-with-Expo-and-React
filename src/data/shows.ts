interface Show {
    id: number,
    title: string,
    image: any,
    progress?: number
}

interface Game {
    id: number,
    title: string,
    image: any,
    rank?: number,
}

/* Arrays for the cards */
export const continueWatching: Show[] = [
  {
    id: 1,
    title: "JJBA",
    image: require("../../assets/images/continue/show1.jpg"),
    progress: 60,
  },

  {
    id: 2,
    title: "Saiki K",
    image: require("../../assets/images/continue/show2.jpg"),
    progress: 30,
  },

  {
    id: 3,
    title: "Pokemon",
    image: require("../../assets/images/continue/show3.jpg"),
    progress: 80,
  },
];
export const animes: Show[] = [
  {
    id: 1,
    title: "Steel Ball Run",
    image: require("../../assets/images/anime/animes1.jpg"),
  },

  {
    id: 2,
    title: "Death Note",
    image: require("../../assets/images/anime/animes2.jpg"),
  },

  {
    id: 3,
    title: "Sakamoto Days",
    image: require("../../assets/images/anime/animes3.jpg"),
  },

  {
    id: 4,
    title: "Saiki K",
    image: require("../../assets/images/anime/animes4.jpg"),
  },
];
export const mobileApps: Game[] = [
  {
    id: 1,
    title: "Solitaire",
    image: require("../../assets/images/games/games1.jpg"),
  },

  {
    id: 2,
    title: "Bloons td6",
    image: require("../../assets/images/games/games2.jpg"),
    rank: 1,
  },

  {
    id: 3,
    title: "Exploding Kittens",
    image: require("../../assets/images/games/games4.png"),
  },

  {
    id: 4,
    title: "Football Manager",
    image: require("../../assets/images/games/games3.png"),
    rank: 2,
  },

  {
    id: 5,
    title: "GTA 6",
    image: require("../../assets/images/games/games5.jpg"),
    rank: 3,
  },
];