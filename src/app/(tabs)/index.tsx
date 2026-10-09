/*
Group 10 - Guilherme, Jon, Yassine, Jonah, Simon
All 5 five of us made a different version but this is the one we decided on as a group
This is a copy of Netflix Home Page
*/
import { ScrollView, StyleSheet, View } from "react-native";
import HomeHeader from "@/components/HomeHeader";
import ShowRow from "@/components/ShowRow";
import { useTheme } from "@/context/ThemeContext";
import { animes, continueWatching, mobileApps } from "@/data/shows";
import { Show } from "@/data/lookup";

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HomeHeader />
      <ScrollView contentContainerStyle={styles.content}>
        <ShowRow title="Continue Watching" shows={continueWatching as Show[]} showProgress />
        <ShowRow title="Mobile Games" shows={mobileApps as Show[]} />
        <ShowRow
          title="Top 10 Mobile Games"
          shows={(mobileApps as Show[]).filter((g) => g.rank != undefined)}
          showRank
        />
        <ShowRow title="Shounen Anime" shows={animes as Show[]} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  // extra bottom space so the floating tab bar never covers the last row
  content: { paddingBottom: 130 },
});
