import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { NotificationType } from "../data/notifications";

type Props = {
  item: NotificationType;
  onPress: () => void;
};

export default function NotificationItem({ item, onPress }: Props) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      {item.unread && <View style={styles.dot} />}
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
    backgroundColor: "#FF0000",
  },
  image: {
    width: 120,
    height: 60,
    borderRadius: 6,
    marginLeft: 10,
  },
  textBlock: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: '400',
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
