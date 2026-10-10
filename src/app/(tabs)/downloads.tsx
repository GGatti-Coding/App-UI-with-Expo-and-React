/*
Downloads screen - Netflix clone (Group 10)
Recreates the Downloads UI with the stacked poster graphic.
*/
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/context/ThemeContext";
import { animes } from "@/data/shows";

export default function DownloadsScreen() {
  const router = useRouter();
  const { colors } = useTheme();

  // Grab the first 3 shows to use as the dummy posters in the center graphic
  const leftPoster = animes[0]?.image;
  const centerPoster = animes[1]?.image;
  const rightPoster = animes[2]?.image;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "black" }]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={10}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </Pressable>
        <Text style={styles.headerTitle}>Downloads</Text>
      </View>

      {/* Smart Downloads Setting */}
      <Pressable style={styles.smartDownloads}>
        <Ionicons name="settings-outline" size={22} color="white" />
        <Text style={styles.smartDownloadsText}>Smart Downloads</Text>
      </Pressable>

      {/* Main Info */}
      <Text style={styles.heading}>Turn on Downloads for You</Text>
      <Text style={styles.subtext}>
        We'll download movies and shows just for you, so you'll always have something to watch.
      </Text>

      {/* Center Graphic */}
      <View style={styles.graphicContainer}>
        <View style={styles.circle}>
          {leftPoster && (
            <Image source={leftPoster} style={[styles.poster, styles.posterLeft]} />
          )}
          {rightPoster && (
            <Image source={rightPoster} style={[styles.poster, styles.posterRight]} />
          )}
          {centerPoster && (
            <Image source={centerPoster} style={[styles.poster, styles.posterCenter]} />
          )}
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.setupButton}>
          <Text style={styles.setupButtonText}>Set up</Text>
        </Pressable>

        <Pressable style={styles.findMoreButton}>
          <Text style={styles.findMoreButtonText}>Find More to Download</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  smartDownloads: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 15,
    marginTop: 15,
    marginBottom: 30,
  },
  smartDownloadsText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  heading: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  subtext: {
    color: "#a0a0a0",
    fontSize: 14,
    paddingHorizontal: 15,
    lineHeight: 20,
    marginBottom: 40,
  },
  graphicContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    marginBottom: 20,
  },
  circle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
  },
  poster: {
    position: "absolute",
    borderRadius: 4,
  },
  posterLeft: {
    width: 90,
    height: 130,
    transform: [{ rotate: "-20deg" }, { translateX: -45 }, { translateY: 10 }],
    zIndex: 1,
  },
  posterRight: {
    width: 90,
    height: 130,
    transform: [{ rotate: "20deg" }, { translateX: 45 }, { translateY: 10 }],
    zIndex: 1,
  },
  posterCenter: {
    width: 110,
    height: 160,
    zIndex: 10, // Keep the center poster overlapping the others
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  buttonContainer: {
    paddingHorizontal: 15,
    gap: 15,
  },
  setupButton: {
    backgroundColor: "#4f46e5", // Netflix blue/purple setup button
    height: 50,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  setupButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  findMoreButton: {
    backgroundColor: "#333333", // Dark gray button
    height: 50,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  findMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});