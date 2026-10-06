/*
Group 10 - Guilherme, Jon, Yassine, Jonah, Simon
All 5 five of us made a different version but this is the one we decided on as a group
This is a copy of Netflix Home Page
*/
import { animes, continueWatching, mobileApps } from "@/data/shows";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

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

              <View key={show.id} style={styles.card}>
                <Image
                  source={show.image}
                  style={styles.cardImage}
                />

                <View style={styles.cardProgress}>
                  <View
                    style={[
                      styles.progressFill,
                      {
                        width: `${show.progress ?? 0}%`,
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

            {mobileApps.map((game) => (

              <View key={game.id} style={styles.card}>
                <Image
                  source={game.image}
                  style={styles.cardImage}
                />

                <Text style={styles.cardTitle}>
                  {game.title}
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

            {mobileApps
              .filter((game) => game.rank != undefined )
              .map((game) => (

                <View key={game.id} style={styles.cardRank}>
                  <Image
                    source={game.image}
                    style={styles.cardImage}
                  />

                  <Text style={styles.cardTitle}>
                    {game.title}
                  </Text>

                  <Text style={styles.rankText}>
                    {game.rank}
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

              <View key={show.id} style={styles.card}>
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