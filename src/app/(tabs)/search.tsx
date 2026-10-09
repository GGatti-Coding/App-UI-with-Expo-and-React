/*
Search screen - Netflix clone (Group 10)
Self-contained: only depends on data/shows.ts and the packages in the default Expo template.
Save as: app/(tabs)/search.tsx
*/
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { animes, continueWatching, mobileApps } from "@/data/shows";
 
// Merge every list from shows.ts into one "recommended" list.
// (Search screens in real apps search everything, not one category.)
const allShows = [...continueWatching, ...animes, ...mobileApps];
 
// Small red/white labels like the ones in the reference screenshot.
// Keyed by position in the list, purely decorative.
const badges: Record<number, { red: string; white?: string }> = {
  0: { red: "Next Episode", white: "Friday" },
  2: { red: "Recently Added" },
};
 
export default function SearchScreen() {
  const router = useRouter();
  const [query, setQuery] = useState("");
 
  // Every keystroke updates `query` (state), React re-runs this function,
  // and the list below is re-filtered. Like re-running a Flask view, but only for this screen.
  const q = query.trim().toLowerCase();
  const results = allShows.filter((show) => show.title.toLowerCase().includes(q));
 
  const goBack = () => (router.canGoBack() ? router.back() : router.replace("/"));
 
  return (
    <SafeAreaView style={styles.container}>
      {/* Search bar */}
      <View style={styles.searchBar}>
        <Pressable onPress={goBack} hitSlop={10}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </Pressable>
 
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search shows, movies, games..."
          placeholderTextColor="#9a9a9a"
          style={styles.input}
          autoCorrect={false}
        />
 
        {query.length > 0 ? (
          <Pressable onPress={() => setQuery("")} hitSlop={10}>
            <Ionicons name="close" size={26} color="white" />
          </Pressable>
        ) : (
          <Ionicons name="mic-outline" size={26} color="white" />
        )}
      </View>
 
      <Text style={styles.heading}>
        {q ? "Top Results" : "Recommended TV Shows & Movies"}
      </Text>
 
      <FlatList
        data={results}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>No results for "{query}"</Text>}
        renderItem={({ item, index }) => {
          const badge = q ? undefined : badges[index];
          return (
            <View style={styles.row}>
              <View>
                <Image source={item.image} style={styles.thumb} />
                {badge && (
                  <View style={styles.badgeRow}>
                    <Text style={styles.badgeRed}>{badge.red}</Text>
                    {badge.white && <Text style={styles.badgeWhite}>{badge.white}</Text>}
                  </View>
                )}
              </View>
 
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>
 
              <Pressable style={styles.playButton}>
                <Ionicons name="play" size={22} color="white" />
              </Pressable>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    height: 60,
    paddingHorizontal: 15,
    backgroundColor: "#2a2a2a",
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 18,
  },
  heading: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginTop: 25,
    marginBottom: 12,
  },
  list: {
    paddingBottom: 130, // keeps the last row clear of the floating tab bar
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 12,
    gap: 15,
  },
  thumb: {
    width: 120,
    height: 68,
    borderRadius: 4,
  },
  badgeRow: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  badgeRed: {
    backgroundColor: "#e50914",
    color: "white",
    fontSize: 9,
    fontWeight: "bold",
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  badgeWhite: {
    backgroundColor: "white",
    color: "black",
    fontSize: 9,
    fontWeight: "bold",
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  title: {
    flex: 1,
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  playButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  empty: {
    color: "#9a9a9a",
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
  },
});
