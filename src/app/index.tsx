import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Alert,
} from "react-native";

/* Arrays for the cards */
const continueWatching = [
  {
    title: "Show 1",
    image: require("../assets/show1.png"),
    progress: 60,
  },

  {
    title: "Show 2",
    image: require("../assets/show2.png"),
    progress: 30,
  },

  {
    title: "Show 3",
    image: require("../assets/show3.png"),
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
                    style={{
                      width: `${show.progress}%`,
                    }}
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

           ...

          </ScrollView>
        </View>

        {/* Top 10 Mobile Games */}
        <View>
          <Text style={styles.sectionTitle}>
            Top 10 Mobile Games
          </Text>

          <ScrollView horizontal>

            ...

          </ScrollView>
        </View>

        {/* Shounen Anime */}
        <View>
          <Text style={styles.sectionTitle}>
            Shounen Anime
          </Text>

          <ScrollView horizontal>

            ...

          </ScrollView>
        </View>

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {/* Home */}

        {/* Search */}

        {/* My Netflix */}

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
    // Your styles
  },


  logo: {
    // Your styles
  },


  title: {
    // Your styles
  },


  headerIcons: {
    // Your styles
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
    // Your styles
  },
});