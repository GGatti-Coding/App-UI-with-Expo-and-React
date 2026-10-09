import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useTheme } from "@/context/ThemeContext";

type IconName = React.ComponentProps<typeof Ionicons>["name"];

// Small helper so each tab only needs two icon names.
function tabIcon(active: IconName, inactive: IconName) {
  return ({ color, focused }: { color: string; focused: boolean }) => (
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
        // Floating pill, same look as the old hand-made bottomNav
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
    </Tabs>
  );
}
