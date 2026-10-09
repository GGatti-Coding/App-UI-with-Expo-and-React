import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/context/ThemeContext";
import { getShowById } from "@/data/lookup";

// Filename [id].tsx = dynamic route, like Flask's @app.route("/show/<id>").
// useLocalSearchParams() is the equivalent of reading the <id> argument.
export default function ShowDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { colors } = useTheme();
  const show = getShowById(id);

  // Fade-in animation when the screen opens
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, { toValue: 1, duration: 500, useNativeDriver: true }).start();
  }, [opacity]);

  if (!show) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text, margin: 20 }}>Show not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Pressable style={styles.close} onPress={() => router.back()}>
        <Ionicons name="close" size={30} color={colors.text} />
      </Pressable>

      <Animated.View style={{ opacity }}>
        <Image source={show.image} style={styles.poster} />
        <View style={styles.body}>
          <Text style={[styles.title, { color: colors.text }]}>{show.title}</Text>
          {show.rank !== undefined && (
            <Text style={[styles.meta, { color: colors.accent }]}>#{show.rank} in Top 10 today</Text>
          )}

          <Pressable style={[styles.playButton, { backgroundColor: colors.text }]}>
            <Ionicons name="play" size={22} color={colors.background} />
            <Text style={[styles.playText, { color: colors.background }]}>Play</Text>
          </Pressable>

          <View style={styles.actions}>
            {(
              [
                ["add", "My List"],
                ["thumbs-up-outline", "Rate"],
                ["share-outline", "Share"],
              ] as const
            ).map(([icon, label]) => (
              <View key={label} style={styles.action}>
                <Ionicons name={icon} size={26} color={colors.text} />
                <Text style={[styles.actionText, { color: colors.subtext }]}>{label}</Text>
              </View>
            ))}
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  close: { alignSelf: "flex-end", padding: 15 },
  poster: { width: "100%", height: 260 },
  body: { padding: 20 },
  title: { fontSize: 26, fontWeight: "bold" },
  meta: { fontSize: 15, fontWeight: "600", marginTop: 6 },
  playButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: 48,
    borderRadius: 6,
    marginTop: 20,
  },
  playText: { fontSize: 18, fontWeight: "bold" },
  actions: { flexDirection: "row", gap: 40, marginTop: 25 },
  action: { alignItems: "center", gap: 4 },
  actionText: { fontSize: 12 },
});
