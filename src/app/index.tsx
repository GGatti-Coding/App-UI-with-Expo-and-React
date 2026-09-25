import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Fixed import source[cite: 6]
import { BottomNavigation } from "../../components/BottomNavigation";
import { ContentPlaceholder } from "../../components/ContentPlaceholder";
import { ProfileHeader } from "../../components/ProfileHeader";
import { TabBarPlaceholder } from "../../components/TabBarPlaceholder";

const profileImage =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80";

const navItems = [
  {
    label: "Home",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
  },
  {
    label: "Search",
    icon: "https://cdn-icons-png.flaticon.com/512/151/151773.png ",
  },
  {
    label: "Add",
    icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png ",
  },
  {
    label: "Reels",
    icon: "https://cdn-icons-png.flaticon.com/512/11820/11820168.png ",
  },
  {
    label: "Profile",
    icon: profileImage,
  },
];

const postImages = [
  "https://images.unsplash.com/photo-1789677802075-feed238d4e66?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1789846958415-e978dfafcd6c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1790122387967-ffecd6ab8e8e?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1711237006409-1c822187abb2?q=80&w=826&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1789652757833-c797b0a4bd71?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1790137650907-92a58d05bfae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1789873105614-0d0fc3cfef1b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1789938852669-7d5d722ffdf7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1789700504105-43873483cf10?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const stats = [
  { label: "Posts", value: "24" },
  { label: "Followers", value: "12k" },
  { label: "Following", value: "186" },
];

export default function IndexScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.headerWrapper}>
            <ProfileHeader profileImage={profileImage} stats={stats} />
          </View>
          <TabBarPlaceholder />
          <ContentPlaceholder postImages={postImages} />
        </ScrollView>
        <BottomNavigation navItems={navItems} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  screen: {
    flex: 1,
  },
  content: {
    paddingBottom: 12,
  },
  headerWrapper: {
    paddingHorizontal: 16,
  },
});