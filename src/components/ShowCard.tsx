import { useRef } from "react";
import { Animated, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Show } from "@/data/lookup";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  show: Show;
  showProgress?: boolean; // red/white progress bar (Continue Watching)
  showRank?: boolean; // big number (Top 10)
};

// Reusable card. Tapping it pushes the details screen onto the STACK and
// passes the show's id as a route parameter.
export default function ShowCard({ show, showProgress, showRank }: Props) {
  const router = useRouter();
  const { colors } = useTheme();
  const scale = useRef(new Animated.Value(1)).current;

  const animate = (to: number) =>
    Animated.spring(scale, { toValue: to, useNativeDriver: true, speed: 30 }).start();

  return (
    <Pressable
      onPressIn={() => animate(0.95)}
      onPressOut={() => animate(1)}
      onPress={() =>
        router.push({ pathname: "/show/[id]", params: { id: String(show.id) } })
      }
    >
      <Animated.View
        style={[showRank ? styles.cardRank : styles.card, { transform: [{ scale }] }]}
      >
        <Image source={show.image} style={styles.cardImage} />

        {showProgress && (
          <View style={styles.cardProgress}>
            <View style={[styles.progressFill, { width: `${show.progress ?? 0}%` }]} />
          </View>
        )}

        <Text style={[styles.cardTitle, { color: colors.text }]} numberOfLines={1}>
          {show.title}
        </Text>

        {showRank && <Text style={styles.rankText}>{show.rank}</Text>}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    marginRight: 5,
    marginLeft: 10,
  },
  cardRank: {
    width: 150,
    marginRight: 10,
    position: "relative",
    paddingLeft: 25,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 6,
  },
  cardTitle: {
    fontSize: 14,
    marginTop: 6,
  },
  cardProgress: {
    width: "100%",
    height: 5,
    backgroundColor: "gray",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "white",
  },
  rankText: {
    position: "absolute",
    left: 0,
    bottom: 20,
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "gray",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 7,
  },
});
