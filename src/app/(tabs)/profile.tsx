/*
@author Jonah Rideout
Profile ("My Netflix") page. The third tab in the bottom bar.
*/
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import MenuRow from "../../components/MenuRow";
import ProfileAvatar from "../../components/ProfileAvatar";
import { useTheme } from "@/context/ThemeContext";
import { currentProfile, otherProfiles } from "../../data/profiles";

export default function ProfileScreen() {
  const router = useRouter();
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.sheet, { backgroundColor: colors.surface }]}>
        {/* Drag handle, title and close button */}
        <View style={[styles.handle, { backgroundColor: colors.border }]} />
        <View style={styles.titleRow}>
          <Text style={[styles.title, { color: colors.text }]}>Profile</Text>
          <Pressable
            style={[styles.closeButton, { backgroundColor: colors.border }]}
            onPress={() => router.back()}
          >
            <Ionicons name="close" size={20} color={colors.text} />
          </Pressable>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Current profile card */}
          <View style={[styles.currentCard, { backgroundColor: colors.background }]}>
            <ProfileAvatar profile={currentProfile} size={88} radius={12} />
            <Pressable style={styles.editButton}>
              <Ionicons name="pencil-outline" size={22} color={colors.text} />
            </Pressable>
            <Text style={[styles.currentName, { color: colors.text }]}>
              {currentProfile.name}
            </Text>
            {currentProfile.gameHandle != undefined && (
              <View style={styles.handleRow}>
                <Ionicons name="game-controller-outline" size={18} color={colors.subtext} />
                <Text style={[styles.handleText, { color: colors.subtext }]}>
                  {currentProfile.gameHandle}
                </Text>
              </View>
            )}
          </View>

          {/* Other profiles */}
          <View style={styles.othersRow}>
            {otherProfiles.map((profile) => (
              <View key={profile.id} style={styles.otherItem}>
                <ProfileAvatar profile={profile} size={56} radius={8} />
                <Text style={[styles.otherName, { color: colors.text }]}>{profile.name}</Text>
              </View>
            ))}
          </View>

          {/* Manage Profiles button (doesn't do anything) */}
          <Pressable style={[styles.manageButton, { backgroundColor: colors.background }]}>
            <Text style={[styles.manageText, { color: colors.text }]}>Manage Profiles</Text>
          </Pressable>

          {/* Menu */}
          <View style={styles.menu}>
            <MenuRow
              icon={theme === "dark" ? "sunny-outline" : "moon-outline"}
              label={theme === "dark" ? "Light Mode" : "Dark Mode"}
              onPress={toggleTheme}
            />
            <MenuRow icon="settings-outline" label="App Settings" />
            <MenuRow icon="person-outline" label="Account" />
            <MenuRow icon="help-circle-outline" label="Help" />
            <MenuRow icon="open-outline" label="Sign Out" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // The sheet with rounded top corners
  sheet: {
    flex: 1,
    marginTop: 40,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 14,
  },

  // extra bottom space so the floating tab bar never covers the last row
  scrollContent: {
    paddingBottom: 130,
  },

  handle: {
    alignSelf: "center",
    width: 30,
    height: 4,
    borderRadius: 2,
    marginTop: 25,
  },

  titleRow: {
    height: 34,
    marginTop: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  closeButton: {
    position: "absolute",
    right: 0,
    top: 3,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  currentCard: {
    marginTop: 6,
    borderRadius: 24,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 14,
  },

  editButton: {
    position: "absolute",
    top: 36,
    right: 24,
  },

  currentName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },

  handleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  handleText: {
    fontSize: 15,
    marginLeft: 6,
  },

  othersRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 22,
  },

  otherItem: {
    width: 70,
    alignItems: "center",
  },

  otherName: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 4,
  },

  manageButton: {
    alignSelf: "center",
    borderRadius: 20,
    paddingVertical: 9,
    paddingHorizontal: 22,
    marginTop: 60,
  },

  manageText: {
    fontSize: 15,
    fontWeight: "bold",
  },

  menu: {
    marginTop: 45,
  },
});