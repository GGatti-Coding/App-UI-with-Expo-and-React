/*
@author Jonah Rideout
Mock data for the Profile page
*/
export type ProfileType = {
  id: string;
  name: string;
  color: string; // background color used when there is no image
  image?: any; // profile image, if the user has one
  gameHandle?: string; // only the active profile shows one
};

// The profile that is signed in (big card at the top)
export const currentProfile: ProfileType = {
  id: "1",
  name: "Guilherme",
  color: "#F2B705",
  image: {
    uri: "https://i.pinimg.com/474x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg",
  },
  gameHandle: "bobbee12",
};

// The other profiles shown in the row under the card
export const otherProfiles: ProfileType[] = [
  {
    id: "2",
    name: "Wilian",
    color: "#E8B923",
    image: {
      uri: "https://i.pinimg.com/474x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg",
    },
  },
  {
    id: "3",
    name: "Totie14",
    color: "#F0B429",
    image: {
      uri: "https://i.pinimg.com/474x/20/b3/31/20b33159c69b9af6701eaf07f2bb638a.jpg",
    },
  },
  {
    id: "4",
    name: "Ilze",
    color: "#1D6FD1",
    image: {
      uri: "https://i.pinimg.com/474x/54/c6/1c/54c61cf7a35db1d073a60ffe1f8c7e79.jpg",
    },
  },
  {
    id: "5",
    name: "Ivete",
    color: "#2A7DE1",
    image: {
      uri: "https://i.pinimg.com/474x/30/4b/63/304b635da65897cb764b3c5e5c96c062.jpg",
    },
  },
];