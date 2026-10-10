/*
@author Ahmed Yassine Messaoudi
*/
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationItem from "@/components/NotificationItem";
import { useTheme } from "@/context/ThemeContext";
import { notifications } from "@/data/notifications";

export default function NotificationsScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  // Copy of the data in state, so a row can be marked as read
  const [items, setItems] = useState(notifications);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={["top"]}
    >
      {/* Header: back arrow and title */}
      <View style={styles.header}>
        <Pressable
          hitSlop={10}
          onPress={() => {
            router.canGoBack() ? router.back() : router.replace("/");
          }}
        >
          <Ionicons name="arrow-back" size={26} color={colors.text} />
        </Pressable>
        <Text style={[styles.title, { color: colors.text }]}>Notifications</Text>
      </View>

      {/* List of notifications */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <NotificationItem
            item={item}
            onPress={() => {
              // Mark the tapped notification as read
              setItems((prevItems) =>
                prevItems.map((prevItem) =>
                  prevItem.id === item.id
                    ? { ...prevItem, unread: false }
                    : prevItem,
                ),
              );
            }}
          />
        )}
      />
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
    paddingVertical: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  // extra bottom space so the floating tab bar never covers the last row
  list: {
    paddingBottom: 130,
  },
});