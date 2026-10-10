import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { categories } from "@/data/categories";
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "expo-router"

// The "N / Home / icons" bar plus the category pills.
// This used to live in the layout; now it belongs to the Home screen only.
export default function HomeHeader() {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <View>
      <View style={styles.header}>
        <Text style={[styles.logo, { color: colors.accent }]}>N</Text>
        <Text style={[styles.title, { color: colors.text }]}>Home</Text>
        <View style={styles.headerIcons}>
          <Pressable onPress={() => router.push("/downloads")}>
          <Ionicons name="download-outline" size={25} color={colors.text} />
          </Pressable>
          <Pressable onPress={() => router.push("/notifications")}>
            <Ionicons name="notifications-outline" size={25} color={colors.text} />
          </Pressable>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }}>
        <View style={styles.categories}>
          {categories.map((cat) => (
            <View key={cat} style={[styles.category, { borderColor: colors.border }]}>
              <Text style={[styles.categoryText, { color: colors.text }]}>{cat}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 35,
    paddingBottom: 15,
    marginLeft: 3,
  },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    marginLeft: "auto",
    paddingTop: 5,
    gap: 15,
  },
  categories: {
    flexDirection: "row",
    paddingTop: 5,
    gap: 8,
    marginRight: 10,
    marginLeft: 5,
  },
  category: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryText: {
    fontSize: 14,
  },
});