/*
Group 10 - Guilherme, Jon, Yassine, Jonah, Simon
All 5 five of us made a different version but this is the one we decided on as a group
This is a copy of Netflix Home Page
*/
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

/* Arrays for the cards */
const continueWatching = [
  {
    title: "JJBA",
    image: require("../../assets/images/continue/show1.jpg"),
    progress: 60,
  },

  {
    title: "Saiki K",
    image: require("../../assets/images/continue/show2.jpg"),
    progress: 30,
  },

  {
    title: "Pokemon",
    image: require("../../assets/images/continue/show3.jpg"),
    progress: 80,
  },
];
const mobileApps = [
  {
    title: "Solitaire",
    image: require("../../assets/images/games/games1.jpg"),
  },

  {
    title: "Bloons td6",
    image: require("../../assets/images/games/games2.jpg"),
  },

  {
    title: "Exploding Kittens",
    image: require("../../assets/images/games/games4.png"),
  },

  {
    title: "Football Manager",
    image: require("../../assets/images/games/games3.png"),
  },
];
const gamesRanked = [
  {
    title: "Bloons td6",
    image: require("../../assets/images/games/games2.jpg"),
    rank: 1,
  },

  {
    title: "Football Manager",
    image: require("../../assets/images/games/games3.png"),
    rank: 2,
  },

  {
    title: "GTA 6",
    image: require("../../assets/images/games/games5.jpg"),
    rank: 3,
  },
];
const animes = [
  {
    title: "Steel Ball Run",
    image: require("../../assets/images/anime/animes1.jpg"),
  },

  {
    title: "Death Note",
    image: require("../../assets/images/anime/animes2.jpg"),
  },

  {
    title: "Sakamoto Days",
    image: require("../../assets/images/anime/animes3.jpg"),
  },

  {
    title: "Saiki K",
    image: require("../../assets/images/anime/animes4.jpg"),
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
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

              <View style={styles.cardRank}>
                <Image
                  source={show.image}
                  style={styles.cardImage}
                />

                <Text style={styles.cardTitle}>
                  {show.title}
                </Text>

                <Text style={styles.rankText}>
                  {show.rank}
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

            {animes.map((show) => (

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
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  sectionTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 10,
  },

  card: {
    width: 120,
    marginRight: 5,
    marginLeft: 10,
  },

  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 6,
  },

  cardTitle: {
    fontSize: 14,
    color: "white",
    marginTop: 6,
  },

  cardRank: {
    width: 150,
    marginRight: 10,
    position: "relative",
    paddingLeft: 25,
  },

  rankText: {
    position: "absolute",
    left: 0,
    bottom: 20,
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "gray",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 7,
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
});