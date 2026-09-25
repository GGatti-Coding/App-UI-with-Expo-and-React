import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface StatItem {
  label: string;
  value: string | number;
}

interface ProfileHeaderProps {
  profileImage?: string;
  stats?: StatItem[];
}

export function ProfileHeader({ profileImage, stats = [] }: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        {profileImage && <Image source={{ uri: profileImage }} style={styles.avatar} />}

        <View style={styles.statsRow}>
          {stats.map((item) => (
            <View key={item.label} style={styles.statBox}>
              <Text style={styles.statValue}>{item.value}</Text>
              <Text style={styles.statLabel}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.username}>jane.doe</Text>
      <Text style={styles.bio}>Designer, Coffee Enthusiast, and Traveler! I love taking photos of interesting places and sharing them with the world!</Text>

      <View style={styles.actions}>
        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryText}>Follow</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>Message</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 8,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#d1d5db",
  },
  statsRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
  },
  statBox: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  statLabel: {
    fontSize: 12,
    color: "#6b7280",
  },
  username: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  bio: {
    marginTop: 4,
    fontSize: 13,
    color: "#4b5563",
  },
  actions: {
    flexDirection: "row",
    marginTop: 14,
    gap: 8,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: "#1f2937",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  primaryText: {
    color: "#fff",
    fontWeight: "600",
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  secondaryText: {
    color: "#111827",
    fontWeight: "600",
  },
});