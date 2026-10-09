import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { NotificationType } from "../data/notifications";

// The component receives one notification and a function to run on tap
type Props = {
  item: NotificationType;
  onPress: () => void;
};

export default function NotificationItem({ item, onPress }: Props) {
  return (
    // The whole row is tappable
    <Pressable style={styles.row} onPress={onPress}>
      {/* Red dot for unread items; transparent when read, so the layout doesn't shift */}
      <View
        style={[
          styles.dot,
          { backgroundColor: item.unread ? "#FF0000" : "transparent" },
        ]}
      />
      {/* Thumbnail, title, description and date */}
      <Image source={item.image} style={styles.image} />
      <View style={styles.textBlock}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {item.message}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // Dot, image and text side by side, centered vertically
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 20,
  },
  image: {
    width: 120,
    height: 60,
    borderRadius: 6,
    marginLeft: 10,
  },
  // Takes the remaining width next to the image
  textBlock: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "400",
  },
  message: {
    color: "#808080",
    fontSize: 15,
  },
  date: {
    fontSize: 12,
    color: "#696969",
  },
});
