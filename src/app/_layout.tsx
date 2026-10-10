import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";

// ROOT = a Stack. Two things can sit in it:
//   1. "(tabs)"  -> the whole tab bar (one stack entry)
//   2. "show/[id]" -> details screen, pushed ON TOP of the tabs
function RootStack() {
  const { theme, colors } = useTheme();
  return (
    <>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="details/[id]"
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen name="notifications" />
        <Stack.Screen name="downloads" />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootStack />
    </ThemeProvider>
  );
}
