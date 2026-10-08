import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
      <Stack.Screen name="game" options={{ title: "Games" }} />
      <Stack.Screen name="movie" options={{ title: "Movies" }} />
      <Stack.Screen name="show" options={{ title: "Shows" }} />
    </Stack >
  )
}
