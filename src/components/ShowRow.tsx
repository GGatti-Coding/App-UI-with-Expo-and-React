import { ScrollView, StyleSheet, Text, View } from "react-native";
import ShowCard from "@/components/ShowCard";
import { Show } from "@/data/lookup";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  title: string;
  shows: Show[];
  showProgress?: boolean;
  showRank?: boolean;
};

// One titled horizontal carousel. Replaces four copy-pasted blocks on Home.
export default function ShowRow({ title, shows, showProgress, showRank }: Props) {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={[styles.sectionTitle, { color: colors.text }]}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {shows.map((show) => (
          <ShowCard
            key={show.id}
            show={show}
            showProgress={showProgress}
            showRank={showRank}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 10,
  },
});
