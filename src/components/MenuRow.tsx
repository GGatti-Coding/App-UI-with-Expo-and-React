/*
@author Jonah Rideout
One row of the Profile menu: icon, label.
*/
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress?: () => void;
};

export default function MenuRow({ icon, label, onPress }: Props) {
  const { colors } = useTheme();

  return (
    <Pressable
      style={[styles.row, { backgroundColor: colors.background }]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={colors.text} />
      <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      <Ionicons name="chevron-forward" size={20} color={colors.text} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 12,
  },
});