/*
Group 10 - Guilherme, Jon, Yassine, Jonah, Simon
All 5 five of us made a different version but this is the one we decided on as a group
This is a copy of Netflix Home Page
*/
import { ScrollView, StyleSheet, View } from "react-native";
import HomeHeader from "@/components/HomeHeader";
import ShowRow from "@/components/ShowRow";
import { useTheme } from "@/context/ThemeContext";
import { media } from "@/data/shows";

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HomeHeader />
      <ScrollView contentContainerStyle={styles.content}>
        <ShowRow
          title="Continue Watching"
          shows={media.filter((m) => m.progress != undefined)}
          showProgress
        />
        <ShowRow
          title="Mobile Games"
          shows={media.filter((m) => m.type == "Game")}
        />
        <ShowRow
          title="Top 10 Mobile Games"
          shows={media.filter((m) => m.type == "Game" && m.rank != undefined)}
          showRank
        />
        <ShowRow
          title="Anime"
          shows={media.filter((m) => m.type == "Anime")}
        />
        <ShowRow
          title="Top 10 Shows / Movies"
          shows={media.filter((m) => m.type != "Game" && m.rank != undefined)}
          showRank
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  // extra bottom space so the floating tab bar never covers the last row
  content: { paddingBottom: 130 },
});
