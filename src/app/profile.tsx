/*
@author Jonah Rideout
Profile ("My Netflix") page. Opens as a sheet from the bottom nav.
*/
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import MenuRow from "../components/MenuRow";
import ProfileAvatar from "../components/ProfileAvatar";
import { currentProfile, otherProfiles } from "../data/profiles";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.sheet}>
        {/* Drag handle, title and close button */}
        <View style={styles.handle} />
        <View style={styles.titleRow}>
          <Text style={styles.title}>Profile</Text>
          <Pressable style={styles.closeButton} onPress={() => router.back()}>
            <Ionicons name="close" size={20} color="#fff" />
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Current profile card */}
          <View style={styles.currentCard}>
            <ProfileAvatar profile={currentProfile} size={88} radius={12} />
            <Pressable style={styles.editButton}>
              <Ionicons name="pencil-outline" size={22} color="#fff" />
            </Pressable>
            <Text style={styles.currentName}>{currentProfile.name}</Text>
            {currentProfile.gameHandle != undefined && (
              <View style={styles.handleRow}>
                <Ionicons name="game-controller-outline" size={18} color="#aaa" />
                <Text style={styles.handleText}>{currentProfile.gameHandle}</Text>
              </View>
            )}
          </View>

          {/* Other profiles */}
          <View style={styles.othersRow}>
            {otherProfiles.map((profile) => (
              <View key={profile.id} style={styles.otherItem}>
                <ProfileAvatar profile={profile} size={56} radius={8} />
                <Text style={styles.otherName}>{profile.name}</Text>
              </View>
            ))}
          </View>

          {/* Manage Profiles button (doesn't do anything) */}
          <Pressable style={styles.manageButton}>
            <Text style={styles.manageText}>Manage Profiles</Text>
          </Pressable>

          {/* Menu */}
          <View style={styles.menu}>
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
    backgroundColor: "black",
  },

  // The dark sheet with rounded top corners
  sheet: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#1C1C1C",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 14,
  },

  handle: {
    alignSelf: "center",
    width: 30,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#666",
    marginTop: 25,
  },

  titleRow: {
    height: 34,
    marginTop: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#fff",
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
    backgroundColor: "#444",
    alignItems: "center",
    justifyContent: "center",
  },

  currentCard: {
    marginTop: 6,
    backgroundColor: "#2B2B2B",
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
    color: "#fff",
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
    color: "#aaa",
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
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 4,
  },

  manageButton: {
    alignSelf: "center",
    backgroundColor: "#2B2B2B",
    borderRadius: 20,
    paddingVertical: 9,
    paddingHorizontal: 22,
    marginTop: 60,
  },

  manageText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },

  menu: {
    marginTop: 45,
  },
});