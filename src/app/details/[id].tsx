import { media } from "@/data/shows";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    Touchable,
    TouchableOpacity,
    View,
} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

export default function DetailsScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    // Get the id of the content and convert to Number before starting
    const item = media.find((content) => content.id === Number(id));

    // No id, send here so code doesn't crash
    if (!item) {
        return (
            <View style={styles.container}>
                <Text style={styles.emptyText}>Not Found</Text>
            </View>
        );
    }

    // Only add a piece of info if the item has it
    const info: string[] = [];
    if (item.type == "Show" || item.type == "Anime") {
        if (item.episodes != undefined) info.push(`${item.episodes} episodes`);
    } else {
        if (item.length != undefined) info.push(`${item.length} min`);
    }

    // Gives each episode a number
    const episodeList = Array.from({ length: item.episodes ?? 0 }, (_, i) => i + 1);

    return (
        <View style={styles.container}>
            <ScrollView>
                {/*Adding Image and back arrow at the top*/}
                <View>
                    <Image source={item.image} style={styles.image} />
                    <Pressable style={styles.backButton} onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={28} color="white" />
                    </Pressable>
                </View>

                <View style={styles.content}>
                    {/* Red N and type*/}
                    <View style={styles.logoRow}>
                        <Text style={styles.logo}>N</Text>
                        <Text style={styles.type}>{item.type.toUpperCase()}</Text>
                    </View>

                    <Text style={styles.title}>{item.title}</Text>

                    {info.length > 0 && (
                        <Text style={styles.info}>{info.join(" . ")}</Text>
                    )}

                    {item.rank != undefined && (
                        <View style={styles.rank}>
                            <Text style={styles.rankText}>Ranked #{item.rank}</Text>
                        </View>
                    )}

                    {/* Buttons (they don't do anything) */}
                    <TouchableOpacity style={styles.playButton}>
                        <Text style={styles.playText}>Play</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.downloadButton}>
                        <Text style={styles.downloadText}>Download</Text>
                    </TouchableOpacity>

                    {item.progress != undefined && (
                        <View style={styles.progressBar}>
                            <View style={[styles.progressFill,
                                {width: `${item.progress}%`}]}/>
                        </View>
                    )}

                    {item.description != undefined && (
                        <Text style={styles.description}>{item.description}</Text>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "black",
    },

    emptyText: {
        color: "gray",
        fontSize: 16,
        margin: 15,
    },

    image: {
        width: "100%",
        height: 230,
    },

    backButton: {
        position: "absolute",
        top: 40,
        left: 15,
    },

    content: {
        padding: 15,
    },

    logoRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    logo: {
        color: "#E50914",
        fontSize: 24,
        fontWeight: "bold",
    },

    type: {
        color: "gray",
        fontSize: 12,
        fontWeight: "bold",
        letterSpacing: 2,
        marginLeft: 6,
    },

    title: {
        color: "white",
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 6,
    },

    info: {
        color: "gray",
        fontSize: 14,
        marginTop: 6,
    },

    rank: {
        alignSelf: "flex-start",
        backgroundColor: "#E50914",
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 3,
        marginTop: 10,
    },

    rankText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
    },

    playButton: {
        backgroundColor: "white",
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: "center",
        marginTop: 15,
    },

    playText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },

    downloadButton: {
        backgroundColor: "#333",
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: "center",
        marginTop: 10,
    },

    downloadText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },

    progressBar: {
        width: "100%",
        height: 4,
        backgroundColor: "gray",
        marginTop: 12,
    },

    progressFill: {
        height: "100%",
        backgroundColor: "#E50914",
    },

    description: {
        color: "white",
        fontSize: 14,
        lineHeight: 20,
        marginTop: 15,
    },
});