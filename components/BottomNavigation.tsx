import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface NavItem {
  label: string;
  icon: string;
  active?: boolean;
}

interface BottomNavigationProps {
  navItems?: NavItem[];
}

export function BottomNavigation({ navItems = [] }: BottomNavigationProps) {
  return (
    <View style={styles.container}>
      {navItems.map((item) => (
        <Pressable key={item.label} style={styles.tab}>
          <Image
            source={{ uri: item.icon }}
            style={[styles.icon, item.active && styles.activeIcon]}
          />
          <Text style={[styles.label, item.active && styles.activeLabel]}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    backgroundColor: "#fff",
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    opacity: 0.7,
  },
  label: {
    marginTop: 4,
    fontSize: 10,
    color: "#6b7280",
  },
  activeIcon: {
    opacity: 1,
  },
  activeLabel: {
    color: "#111827",
    fontWeight: "600",
  },
});