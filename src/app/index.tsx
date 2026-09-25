import {Alert, Image, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import { Heart, MessageCircle, Send, Bookmark} from "lucide-react-native";
import {Home, Search, Clapperboard, ShoppingBag, User} from "lucide-react-native";
import { BottomNavigation } from "../../components/BottomNavigation";
import { ContentPlaceholder } from "../../components/ContentPlaceholder";
import { ProfileHeader } from "../../components/ProfileHeader";
import { TabBarPlaceholder } from "../../components/TabBarPlaceholder";

export default function IndexScreen() {
  const showAlert = () => {
    if (Platform.OS === "web") {
      window.alert("Alert Button pressed");
    } else {
      Alert.alert("Alert Button pressed");
    }
  };
  const avatarUri =
    "https://imgs.search.brave.com/KscaovksddvAdVdJR6jM9bNvb_36CGUktqC8P1IIdi8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyNi8w/OC8xNC8xNC80MC8x/NC00MC0zNC00NjNf/NjQwLmpwZw";
  const picUri =
    "https://imgs.search.brave.com/RvyhRlhR-iJd9fqysikfQcHkgLu540PI0kNcetww1Wo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTEw/NjkxNTc4L3Bob3Rv/L21hbGUtZmFzaGlv/bi1tb2RlbC1jcmF6/eS1qdW1wcy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WGZ1/UHhfYzhwcUp2OHpm/aXVxd3ROUk12akl3/YlBIX0huRVE0LXl6/NU1hQT0";
  const flwrOneUri= 
    "https://imgs.search.brave.com/rqscPZiCgWvbNEyYMawnWyn43eLwFuW3cxjLR5Ej-2s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYmxh/Y2stYW5kLXdoaXRl/LXByb2ZpbGUtcGlj/dHVyZXMtOTAwLXgt/MTM0OC02ZWh2bHZ2/MGJsZHRzajY3Lmpw/Zw";
  const flwrTwoUri =
    "https://imgs.search.brave.com/po0UZNGuANlLytsc_dILVzXI3dW-X_ix4TtRMu_QtGI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYmxh/Y2stYW5kLXdoaXRl/LXByb2ZpbGUtcGlj/dHVyZXMtMjAwMC14/LTIwMDAtM3ZlbzBn/MjNnajRqYTczcC5q/cGc";  
  const flwrThreeUri =
    "https://imgs.search.brave.com/2lBeLpjewc3fT-OV17tz2x9zTKF5FWwJuydMaYj56sI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/OTkyOTg2Ny9waG90/by9wcm9maWxlLXZp/ZXctb2YteW91bmct/c2VyaW91cy13b21h/bi1hZ2FpbnN0LXdh/bGwuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUdxd040ekRY/ZDFqckxRUDhHTTIz/eXM3MTBjM0l5Vnoy/TUk1R3RTanhzbDQ9";  
    const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10,
      paddingVertical: 10,
    },

    headerText: {
      flex: 1,
    },

    username: {
      fontWeight: "600",
      fontSize: 14,
    },

    nickname: {
      fontWeight: "300",
      fontSize: 10,
      color: "#696969",
    },

    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 8,
    },

    picture: {
      width: "100%",
      height: 500,
    },

    threeDots: {
      fontSize: 20,
      fontWeight: "bold",
      paddingBottom: 14,
    },

    actionsRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10,
      paddingTop: 10,
    },

    icon: {
      marginRight: 15,
    },

    bookmarkIcon: {
      marginLeft: "auto",
    },

    likedByRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10,
      paddingTop: 8,
    },

    smallAvatar: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "white",
    },

    overlap: {
      marginLeft: -8,
    },

    likedText: {
      marginLeft: 8,
    },

    bold: {
      fontWeight: "bold",
    },

    bio: {
      paddingHorizontal: 10,
      paddingTop: 6,
    },

    commentShow: {
      paddingHorizontal: 10,
      paddingTop: 6,
      color: "#696969",
    },

    comment: {
      paddingHorizontal: 10,
      paddingTop: 2,
    },

    day: {
      paddingHorizontal: 10,
      paddingTop: 7,
      color: "#696969",
      fontSize: 12,
    },

    navBar: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      margin: 20,
    }

  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flex: 1}}>   
        <ScrollView>
          <ProfileHeader />
          <TabBarPlaceholder />
          <ContentPlaceholder />
          <View style={styles.header}>
            <Image source={{uri: avatarUri}} style={styles.avatar}/>
            <View style={styles.headerText}>
              <Text style={styles.username}>ootd_everyday</Text>
              <Text style={styles.nickname}>via frenchie_fry39</Text>
            </View>
            <Text style={styles.threeDots}>...</Text>
          </View>
          <Image source={{uri: picUri}} style={styles.picture}/>
          <View style={styles.actionsRow}>
              <Heart style={styles.icon}/>
              <MessageCircle style={styles.icon}/>
              <Send style={styles.icon}/>
              <Bookmark style={styles.bookmarkIcon}/>
          </View>

          <View style={styles.likedByRow}>
              <Image source={{uri: flwrOneUri}} style={styles.smallAvatar}/>
              <Image source={{uri: flwrTwoUri}} style={[styles.smallAvatar, styles.overlap]}/>
              <Image source={{uri: flwrThreeUri}} style={[styles.smallAvatar, styles.overlap]}/>
              <Text style={styles.likedText}>
                  Liked by <Text style={styles.bold}>paisley.print.48</Text> and{" "}
                  <Text style={styles.bold}>7 others</Text>
              </Text>
          </View>
          
          <Text style={styles.bio}>
              <Text style={styles.bold}>frenchie_fry39 </Text>
              <Text>Fresh shot on a good day! 😀</Text>
          </Text>

          <Text style={styles.commentShow}>View all 12 comments</Text>
          <Text style={styles.comment}>
              <Text style={styles.bold}>lil_wyatt838 </Text>
              <Text>Awesome Tones</Text>
          </Text>
          <Text style={styles.comment}>
            <Text style={styles.bold}>pia.in.a.pod </Text>
            <Text>Gorg. Love it! ❤️</Text>
          </Text>
          <Text style={styles.day}>1 day ago</Text>
            
            
        </ScrollView>
        <View style={styles.navBar}>
            <Home></Home>
            <Search></Search>
            <Clapperboard></Clapperboard>
            <ShoppingBag></ShoppingBag>
            <User></User>
        </View>
        <Pressable
          onPress={showAlert}
          style={({ pressed }) => [
            {
              backgroundColor: "#2563EB",
              padding: 16,
              margin: 16,
              borderRadius: 8,
              alignItems: "center",
            },
            pressed && { opacity: 0.8 },
          ]}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>Alert</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
