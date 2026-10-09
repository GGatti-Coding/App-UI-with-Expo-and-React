/*
@author Ahmed Yassine Messaoudi
*/
// The shape of one notification. Every item in the list must have these fields.
export type NotificationType = {
  id: string; // unique id, used as the list key
  title: string; // bold line for notification title
  message: string; // grey line under the title
  date: string; // shown under the message
  image: any; // local image loaded with require(...)
  unread: boolean; // true shows the red dot
  movieId: string; // id passed to the Movie Details screen when tapped (this won't be implemented since we're not creating a notification to movie details path)
};

// Mock data for the Notifications screen
export const notifications: NotificationType[] = [
  {
    id: "1",
    title: "Now Available",
    message: "Season 2",
    date: "Oct 4",
    image: require("../../assets/images/notifications/animenot1.png"),
    unread: true,
    movieId: "1",
  },

  {
    id: "2",
    title: "A top sci-fi title picked just for you",
    message: "Check out Mickey 17",
    date: "Oct 3",
    // Path is relative to this file: up two folders, then into assets
    image: require("../../assets/images/notifications/animenot2.webp"),
    unread: true,
    movieId: "2",
  },

  {
    id: "3",
    title: "STEEL BALL RUN JoJo's Bizarre Adventure",
    message: "Watch an all new episode now.",
    date: "Oct 2",
    image: require("../../assets/images/notifications/animenot3.webp"),
    unread: true,
    movieId: "3",
  },

  {
    id: "4",
    title: "Don't miss out",
    message: "Experience more Hunter X Hunter right now on Netflix.",
    date: "Oct 1",
    image: require("../../assets/images/notifications/animenot4.webp"),
    unread: true,
    movieId: "4",
  },

  {
    id: "5",
    title: "New Arrival",
    message: "Demon Slayer: Kimetsu no Yaiba is back!",
    date: "Sep 30",
    image: require("../../assets/images/notifications/animenot5.webp"),
    unread: true,
    movieId: "5",
  },

  {
    id: "6",
    title: "JoJo's Bizarre Adventure",
    message: "What do you think?",
    date: "Sep 28",
    image: require("../../assets/images/notifications/animenot6.webp"),
    unread: true,
    movieId: "6",
  },

  {
    id: "7",
    title: "Don't miss out",
    message: "Experience more The Disastrous Life of Saiki K",
    date: "Sep 28",
    image: require("../../assets/images/notifications/animenot7.png"),
    unread: true,
    movieId: "7",
  },

  {
    id: "8",
    title: "Your Latest Top Picks",
    message: "Find a new favorite.",
    date: "Sep 22",
    image: require("../../assets/images/notifications/animenot8.webp"),
    unread: true,
    movieId: "8",
  },
];
