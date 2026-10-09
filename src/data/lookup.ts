// Helper that merges the arrays exported from data/shows.ts so that
// the Search screen and the Details screen can use one list.
//
// NOTE: this assumes every show has a unique `id` across ALL arrays.
// If two arrays reuse the same id (e.g. id: 1), give them unique ids in shows.ts.
import { ImageSourcePropType } from "react-native";
import { animes, continueWatching, mobileApps } from "@/data/shows";

export type Show = {
  id: string | number;
  title: string;
  image: ImageSourcePropType;
  progress?: number;
  rank?: number;
};

export const allShows: Show[] = [
  ...(continueWatching as Show[]),
  ...(animes as Show[]),
  ...(mobileApps as Show[]),
];

export function getShowById(id: string): Show | undefined {
  return allShows.find((s) => String(s.id) === id);
}
