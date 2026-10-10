import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { ComponentProps } from "react";
import { ColorValue } from "react-native";
import { useTheme } from "@/context/ThemeContext";

type IconName = ComponentProps<typeof Ionicons>["name"];

function tabIcon(active: IconName, inactive: IconName) {
  return ({ color, focused }: { color: ColorValue; focused: boolean }) => (
    <Ionicons name={focused ? active : inactive} size={24} color={color} />
  );
}

export default function TabsLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.subtext,
        tabBarLabelStyle: { fontSize: 11 },
        tabBarStyle: {
          position: "absolute",
          bottom: 30,
          marginHorizontal: 20,
          height: 64,
          paddingTop: 6,
          backgroundColor: colors.background,
          borderRadius: 32,
          borderWidth: 1,
          borderColor: colors.border,
          borderTopWidth: 1,
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: tabIcon("home", "home-outline") }} />
      <Tabs.Screen name="search" options={{ title: "Search", tabBarIcon: tabIcon("search", "search-outline") }} />
      <Tabs.Screen name="profile" options={{ title: "My Netflix", tabBarIcon: tabIcon("person", "person-outline") }} />
    </Tabs>
  );
}