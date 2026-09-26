import { 
  Text, 
  View, 
  StyleSheet,
  Alert, 
  Image, 
  Pressable, 
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
      >

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Text style={styles.homeText}>Home</Text>
            <Ionicons name="chevron-down" size={24} color="#111" />
          </View>

          <View style={styles.headerButtons}>
            <View style={styles.circleButton}>
              <Ionicons name="person-outline" size={22} color="#111" />
            </View>

            <View style={styles.circleButton}>
              <Ionicons name="cart-outline" size={22} color="#111" />
            </View>
          </View>
        </View>

        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
        >
          <View style={styles.categoryItem}>
            <Ionicons name="moon-outline" size={26} color="#111" />
            <Text style={styles.categoryLabel}>Late Night</Text>
          </View>

          <View style={styles.categoryItem}>
            <Ionicons name="pricetag-outline" size={26} color="#111" />
            <Text style={styles.categoryLabel}>Deals</Text>
          </View>

          <View style={styles.categoryItem}>
            {/* couldn't find a pill icon, medkit was next best option */}
            <Ionicons name="medkit-outline" size={26} color="#111" />
            <Text style={styles.categoryLabel}>Drugstore</Text>
          </View>

          <View style={styles.categoryItem}>
            <Ionicons name="nutrition-outline" size={26} color="#111" />
            <Text style={styles.categoryLabel}>Grocery</Text>
          </View>

          <View style={styles.categoryItem}>
            {/* again, couldn't find a perfect match for the convenience icon, just used a cube as placeholder */}
            <Ionicons name="cube-outline" size={26} color="#111" />
            <Text style={styles.categoryLabel}>Convenience</Text>
          </View>
        </ScrollView>

        <View style={styles.divider}></View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your past orders</Text>
          <View style={styles.circleButtonSmall}>
            <Ionicons name="arrow-forward" size={18} color="#111" />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardRow}
        >
          <View style={styles.card}>
            <Image 
              source={{ uri: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=750,height=,format=jpeg,quality=80/https://cdn.doordash.com/media/store/header/120a5653-c6ac-40c9-ae5a-3b38a049f6a8.png"}}
              style={styles.cardImage}
            />
            
            <View style={styles.cardNameRow}>
              <Text style={styles.cardName}>Subway</Text>
              <Ionicons name="heart-outline" size={20} color="#111" />
            </View>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={13} color="#111" />
              <Text style={styles.ratingText}>4.4 (200+) • 1.7 mi • 27 min</Text>
            </View>
            <Text style={styles.deliveryText}>CA$0 delivery fee over CA$15</Text>
            <View style={styles.badgeRow}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Buy 1, get 1 free</Text>
              </View>
              <Text style={styles.sponsoredText}>Sponsored</Text>
            </View>
          </View>
 
          <View style={styles.card}>
            <Image
              source={{ uri: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=750,height=,format=jpeg,quality=80/https://cdn.doordash.com/media/store/header/24cb273e-5a71-4737-973d-9633a1e54552.jpg"}}
              style={styles.cardImage} 
            />
            <View style={styles.cardNameRow}>
              <Text style={styles.cardName}>McDonald's</Text>
              <Ionicons name="heart-outline" size={20} color="#111" />
            </View>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={13} color="#111" />
              <Text style={styles.ratingText}>4.3 (200+) • 1.2 mi • 20 min</Text>
            </View>
            <Text style={styles.deliveryText}>CA$0 delivery fee over CA$15</Text>
            <View style={styles.badgeRow}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Buy 1, get 1 free</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recently viewed</Text>
          <View style={styles.circleButtonSmall}>
            <Ionicons name="arrow-forward" size={18} color="#111" />
          </View>
        </View>
 
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardRow}
        >
          <View style={styles.card}>
            <Image
              source={{ uri: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/a04d5976-7ea3-4a39-8756-a5baa8fc05df.jpg"}}
              style={styles.cardImage}
            />
            <View style={styles.cardNameRow}>
              <Text style={styles.cardName}>A&W</Text>
              <Ionicons name="heart-outline" size={20} color="#111" />
            </View>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={13} color="#111" />
              <Text style={styles.ratingText}>4.4 (200+) • 1.7 mi • 23 min</Text>
            </View>
            <Text style={styles.deliveryText}>CA$0 delivery fee over CA$15</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{ uri: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/5206eb8b-543c-4491-9f90-ff7774de0704.jpeg"}}
              style={styles.cardImage}
            />
            <View style={styles.cardNameRow}>
              <Text style={styles.cardName}>Empress Palace</Text>
              <Ionicons name="heart-outline" size={20} color="#111" />
            </View>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={13} color="#111" />
              <Text style={styles.ratingText}>4.3 (200+) • 30 min</Text>
            </View>
            <Text style={styles.deliveryText}>CA$0 delivery fee over CA$15</Text>
            <View style={styles.badgeRow}>
              <Text style={styles.sponsoredText}>Sponsored</Text>
            </View>
          </View>
        </ScrollView>

        <Pressable
          style={styles.alertButton}
          onPress={() => Alert.alert("Alert Button pressed")}
        >
          <Text style={styles.alertButtonText}>Alert</Text>
        </Pressable>


      </ScrollView>

      <View style={styles.searchBarWrapper}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color="#111" />
          <Text style={styles.searchText}>Search DoorDash</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingTop: 30,
    paddingBottom: 100,
  },

  header: {
    height: 105,
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  homeText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111"
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 10
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryRow: {
    paddingHorizontal: 24,
    gap: 5,
    paddingVertical: 10,
  },
  categoryItem: {
    alignItems: "center",
    gap: 6,
    width: 78,
  },
  categoryLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#111",
    textAlign: "center",
  },

  divider: {
    height: 8,
    backgroundColor: "#f2f2f2",
    marginVertical: 12,
  },

  cardRow: {
    paddingHorizontal: 24,
    gap: 16,
    paddingBottom: 20,
  },
  card: {
    width: 220,
  },
  cardImage: {
    width: "100%",
    height: 130,
    borderRadius: 12,
    marginBottom: 8,
  },
  cardNameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 2,
  },
  ratingText: {
    fontSize: 13,
    color: "#444",
  },
  deliveryText: {
    fontSize: 13,
    color: "#444",
    marginTop: 2,
  },
  badgeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 6,
  },
  badge: {
    backgroundColor: "#fde8e6",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  badgeText: {
    color: "#c1291b",
    fontSize: 12,
    fontWeight: "700",
  },
  sponsoredText: {
    fontSize: 12,
    color: "#666",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  circleButtonSmall: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
    alignItems: "center",
  },

  alertButton: {
    backgroundColor: "#111",
    marginHorizontal: 24,
    marginTop: 24,
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: "center",
  },
  alertButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  searchBarWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 14,
    paddingBottom: 24,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  searchText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
});
