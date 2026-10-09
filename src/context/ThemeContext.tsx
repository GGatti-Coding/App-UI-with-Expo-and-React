import React, { createContext, useContext, useMemo, useState } from "react";
import { useColorScheme } from "react-native";

export type ThemeName = "dark" | "light";

export const palettes = {
  dark: {
    background: "#000000",
    surface: "#1c1c1e",
    text: "#ffffff",
    subtext: "#9a9a9a",
    border: "#555555",
    accent: "#e50914",
  },
  light: {
    background: "#ffffff",
    surface: "#f0f0f0",
    text: "#111111",
    subtext: "#666666",
    border: "#bbbbbb",
    accent: "#e50914",
  },
};

export type Colors = typeof palettes.dark;

type ThemeContextValue = {
  theme: ThemeName;
  colors: Colors;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

// Wraps the whole app (see app/_layout.tsx). Any screen can call useTheme().
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const system = useColorScheme();
  const [theme, setTheme] = useState<ThemeName>(system === "light" ? "light" : "dark");

  const value = useMemo(
    () => ({
      theme,
      colors: palettes[theme],
      toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
