import { Image, StyleSheet, View } from "react-native";

interface ContentPlaceholderProps {
  postImages?: string[];
}

export function ContentPlaceholder({ postImages = [] }: ContentPlaceholderProps) {
  return (
    <View style={styles.grid}>
      {postImages.map((imageUrl) => (
        <Image key={imageUrl} source={{ uri: imageUrl }} style={styles.tile} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 2,
    gap: 2,
  },
  tile: {
    width: "32.5%",
    height: 118,
    marginBottom: 2,
    borderRadius: 4,
    backgroundColor: "#e5e7eb",
  },
});