import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import NotificationItem from "../components/NotificationItem";
import { notifications } from "../data/notifications";

export default function NotificationsScreen() {
  const router = useRouter();
  // Copy of the data in state, so a row can be marked as read
  const [items, setItems] = useState(notifications);

  return (
    <View style={styles.container}>
      {/* Header: back arrow and title */}
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Pressable
              style={{ marginLeft: 1 }}
              onPress={() => {
                router.canGoBack() ? router.back() : router.replace("/index");
              }}
            >
              <Ionicons name="arrow-back" size={26} color="#fff" />
            </Pressable>
          ),
          title: "Notifications",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "500",
          },
          headerTintColor: "#fff",
          headerShadowVisible: false,
        }}
      />
      {/* List of notifications */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 120 }}
        renderItem={({ item }) => (
          <NotificationItem
            item={item}
            onPress={() => {
              router.push(`/movie/${item.movieId}`);
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
      {/* Temporary nav bar: remove when the layout uses real tabs */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Ionicons name="home" size={24} color="white" />
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="search" size={24} color="white" />
          <Text style={styles.navText}>Search</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="person" size={24} color="white" />
          <Text style={styles.navText}>My Netflix</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    padding: 16,
  },

  bottomNav: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",

    height: 60,
    width: "70%",

    backgroundColor: "black",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "gray",

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  navText: {
    fontSize: 12,
    color: "white",
  },
});
