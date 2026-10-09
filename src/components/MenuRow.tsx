/*
@author Jonah Rideout
One row of the Profile menu: icon, label.
*/
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress?: () => void;
};

export default function MenuRow({ icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <Ionicons name={icon} size={24} color="#fff" />
      <Text style={styles.label}>{label}</Text>
      <Ionicons name="chevron-forward" size={20} color="#fff" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2B2B2B",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  label: {
    flex: 1,
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 12,
  },
});