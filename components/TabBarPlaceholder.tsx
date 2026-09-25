import { Pressable, StyleSheet, Text, View } from "react-native";

export function TabBarPlaceholder() {
  return (
    <View style={styles.container}>
      <Pressable style={[styles.tab, styles.activeTab]}>
        <Text style={styles.label}>Posts</Text>
      </Pressable>
      <Pressable style={styles.tab}>
        <Text style={styles.label}>Reels</Text>
      </Pressable>
      <Pressable style={styles.tab}>
        <Text style={styles.label}>Tagged</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#111827",
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#374151",
  },
});
