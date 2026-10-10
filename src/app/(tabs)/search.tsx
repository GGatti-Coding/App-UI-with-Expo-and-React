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
import { useTheme } from "@/context/ThemeContext";
import { media } from "@/data/shows";
 
// Small red/white labels like the ones in the reference screenshot.
// Keyed by position in the list, purely decorative.
const badges: Record<number, { red: string; white?: string }> = {
  0: { red: "Next Episode", white: "Friday" },
  2: { red: "Recently Added" },
};
 
export default function SearchScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const [query, setQuery] = useState("");
 
  // Every keystroke updates `query` (state), React re-runs this function,
  // and the list below is re-filtered. Like re-running a Flask view, but only for this screen.
  const q = query.trim().toLowerCase();
  const results = media.filter((show) => show.title.toLowerCase().includes(q));
 
  const goBack = () => (router.canGoBack() ? router.back() : router.replace("/"));
 
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Search bar */}
      <View style={[styles.searchBar, { backgroundColor: colors.surface }]}>
        <Pressable onPress={goBack} hitSlop={10}>
          <Ionicons name="arrow-back" size={28} color={colors.text} />
        </Pressable>
 
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search shows, movies, games..."
          placeholderTextColor={colors.subtext}
          style={[styles.input, { color: colors.text }]}
          autoCorrect={false}
        />
 
        {query.length > 0 ? (
          <Pressable onPress={() => setQuery("")} hitSlop={10}>
            <Ionicons name="close" size={26} color={colors.text} />
          </Pressable>
        ) : (
          <Ionicons name="mic-outline" size={26} color={colors.text} />
        )}
      </View>
 
      <Text style={[styles.heading, { color: colors.text }]}>
        {q ? "Top Results" : "Recommended TV Shows & Movies"}
      </Text>
 
      <FlatList
        data={results}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={[styles.empty, { color: colors.subtext }]}>
            No results for "{query}"
          </Text>
        }
        renderItem={({ item, index }) => {
          const badge = q ? undefined : badges[index];
          return (
            <View style={styles.row}>
              <View>
                <Image source={item.image} style={styles.thumb} />
                {badge && (
                  <View style={styles.badgeRow}>
                    <Text style={[styles.badgeRed, { backgroundColor: colors.accent }]}>
                      {badge.red}
                    </Text>
                    {badge.white && <Text style={styles.badgeWhite}>{badge.white}</Text>}
                  </View>
                )}
              </View>
 
              <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>
                {item.title}
              </Text>
 
              <Pressable style={[styles.playButton, { borderColor: colors.text }]}>
                <Ionicons name="play" size={22} color={colors.text} />
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
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    height: 60,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  heading: {
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
    fontSize: 18,
    fontWeight: "600",
  },
  playButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  empty: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
  },
});