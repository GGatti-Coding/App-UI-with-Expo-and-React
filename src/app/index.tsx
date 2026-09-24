import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

/* Arrays for the cards */
const continueWatching = [
  {
    title: "Show 1",
    image: require("../assets/continue/show1.png"),
    progress: 60,
  },

  {
    title: "Show 2",
    image: require("../assets/continue/show2.png"),
    progress: 30,
  },

  {
    title: "Show 3",
    image: require("../assets/continue/show3.png"),
    progress: 80,
  },
];
const mobileApps = [
  {
    title: "app 1",
    image: require("../assets/games/app1.png"),
    progress: 60,
  },

  {
    title: "app 2",
    image: require("../assets/games/app2.png"),
    progress: 30,
  },

  {
    title: "app 3",
    image: require("../assets/games/app3.png"),
    progress: 80,
  },
];
const gamesRanked = [
  {
    title: "game 1",
    image: require("../assets/games/game1.png"),
    progress: 60,
  },

  {
    title: "game 2",
    image: require("../assets/games/game2.png"),
    progress: 30,
  },

  {
    title: "game 3",
    image: require("../assets/games/game3.png"),
    progress: 80,
  },
];
const animes = [
  {
    title: "Show 1",
    image: require("../assets/anime/anime1.png"),
    progress: 60,
  },

  {
    title: "Show 2",
    image: require("../assets/anime/anime2.png"),
    progress: 30,
  },

  {
    title: "Show 3",
    image: require("../assets/anime/anime3.png"),
    progress: 80,
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>

          <Text style={styles.logo}>N</Text>
          <Text style={styles.title}>Home</Text>

          <View style={styles.headerIcons}>
            <Text>Downloads</Text>
            <Text>Notifications</Text>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categories}>
          <View style={styles.category}>
            <Text>Shows</Text>
          </View>

          <View style={styles.category}>
            <Text>Movies</Text>
          </View>

          <View style={styles.category}>
            <Text>Games</Text>
          </View>

          <View style={styles.category}>
            <Text>Podcasts</Text>
          </View>
        </View>

        {/* Continue Watching */}
        <View>
          <Text style={styles.sectionTitle}>
            Continue Watching
          </Text>

          <ScrollView horizontal>

            {continueWatching.map((show) => (

              <View style={styles.card}>
                <Image
                  source={show.image}
                  style={styles.cardImage}
                />

                <View style={styles.cardProgress}>
                  <View
                    style={[
                      styles.progressFill,
                      {
                        width: `${show.progress}%`,
                      }
                    ]}
                  />

                </View>
                <Text style={styles.cardTitle}>
                  {show.title}
                </Text>
              </View>

            ))}

          </ScrollView>
        </View>

        {/* Mobile Games */}
        <View>
          <Text style={styles.sectionTitle}>
            Mobile Games
          </Text>

          <ScrollView horizontal>

           {mobileApps.map((show) => (

              <View style={styles.card}>
                <Image
                  source={show.image}
                  style={styles.cardImage}
                />

                <Text style={styles.cardTitle}>
                  {show.title}
                </Text>
              </View>

            ))}

          </ScrollView>
        </View>

        {/* Top 10 Mobile Games */}
        <View>
          <Text style={styles.sectionTitle}>
            Top 10 Mobile Games
          </Text>

          <ScrollView horizontal>

            {gamesRanked.map((show) => (

              <View style={styles.card}>
                <Image
                  source={show.image}
                  style={styles.cardImage}
                />

                <Text style={styles.cardTitle}>
                  {show.title}
                </Text>
              </View>

            ))}

          </ScrollView>
        </View>

        {/* Shounen Anime */}
        <View>
          <Text style={styles.sectionTitle}>
            Shounen Anime
          </Text>

          <ScrollView horizontal>

            {gamesRanked.map((show) => (

              <View style={styles.card}>
                <Image
                  source={show.image}
                  style={styles.cardImage}
                />

                <Text style={styles.cardTitle}>
                  {show.title}
                </Text>
              </View>

            ))}

          </ScrollView>
        </View>

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {/* Home */}
        <View style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </View>
        {/* Search */}
        <View style={styles.navItem}>
          <Text style={styles.navText}>Search</Text>
        </View> 
        {/* My Netflix */}
        <View style={styles.navItem}>
          <Text style={styles.navText}>My Netflix</Text>
        </View>
      </View>

      {/* Alert Button */}
      <Button
        title="Alert"
        onPress={() => {
          Alert.alert("Alert Button pressed");
        }}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },


  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },


  logo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
    marginRight: 15,
  },


  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },


  headerIcons: {
    flexDirection: "row",
    marginLeft: "auto",
    gap: 15,
  },


  categories: {
    // Your styles
  },


  category: {
    // Your styles
  },


  sectionTitle: {
    // Your styles
  },


  card: {
    // Your styles
  },


  cardImage: {
    // Your styles
  },


  cardTitle: {
    // Your styles
  },


  cardCategory: {
    // Your styles
  },


  cardProgress: {
    width: "100%",
    height: 5,
    backgroundColor: "gray",
  },


  progressFill: {
    height: "100%",
    backgroundColor: "white",
  },


  bottomNav: {
    height: 70,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "gray",
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  navText: {
    fontSize: 12,
    color: "white",
  },
});