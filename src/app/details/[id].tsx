/*
@author Guilherme Gatti
This is the page for each movie, game or show.
Aspects will show up depending on whether information present in their array.
*/
import { media } from "@/data/shows";
import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function DetailsScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const { colors } = useTheme();

    // Get the id of the content and convert to Number before starting
    const item = media.find((content) => content.id === Number(id));

    // No id, send here so code doesn't crash
    if (!item) {
        return (
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                <Text style={[styles.emptyText, { color: colors.subtext }]}>Not Found</Text>
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
        <View style={[styles.container, { backgroundColor: colors.background }]}>
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
                        <Text style={[styles.logo, { color: colors.accent }]}>N</Text>
                        <Text style={[styles.type, { color: colors.subtext }]}>
                            {item.type.toUpperCase()}
                        </Text>
                    </View>

                    <Text style={[styles.title, { color: colors.text }]}>{item.title}</Text>

                    {info.length > 0 && (
                        <Text style={[styles.info, { color: colors.subtext }]}>
                            {info.join(" . ")}
                        </Text>
                    )}

                    {item.rank != undefined && (
                        <View style={[styles.rank, { backgroundColor: colors.accent }]}>
                            <Text style={styles.rankText}>Ranked #{item.rank}</Text>
                        </View>
                    )}

                    {/* Buttons (they don't do anything) */}
                    <TouchableOpacity style={[styles.playButton, { backgroundColor: colors.text }]}>
                        <Text style={[styles.playText, { color: colors.background }]}>Play</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.downloadButton, { backgroundColor: colors.surface }]}>
                        <Text style={[styles.downloadText, { color: colors.text }]}>Download</Text>
                    </TouchableOpacity>

                    {item.progress != undefined && (
                        <View style={[styles.progressBar, { backgroundColor: colors.border }]}>
                            <View style={[styles.progressFill,
                            { width: `${item.progress}%`, backgroundColor: colors.accent }]} />
                        </View>
                    )}

                    {item.description != undefined && (
                        <Text style={[styles.description, { color: colors.text }]}>
                            {item.description}
                        </Text>
                    )}
                </View>

                {/* My List / Rate / Share */}
                <View style={styles.actions}>
                    <View style={styles.action}>
                        <Ionicons name="add" size={28} color={colors.text} />
                        <Text style={[styles.actionText, { color: colors.subtext }]}>My List</Text>
                    </View>
                    <View style={styles.action}>
                        <Ionicons name="thumbs-up-outline" size={26} color={colors.text} />
                        <Text style={[styles.actionText, { color: colors.subtext }]}>Rate</Text>
                    </View>
                    <View style={styles.action}>
                        <Ionicons name="share-social-outline" size={26} color={colors.text} />
                        <Text style={[styles.actionText, { color: colors.subtext }]}>Share</Text>
                    </View>
                </View>

                {/* Episode List, only if id has episodes */}
                {item.episodes != undefined && (
                    <View style={styles.episodes}>
                        <View style={[styles.tab, { borderTopColor: colors.accent }]}>
                            <Text style={[styles.tabText, { color: colors.text }]}>Episodes</Text>
                        </View>
                        {episodeList.map((number) => (
                            <View key={number} style={styles.episode}>
                                <Text style={[styles.episodeTitle, { color: colors.text }]}>
                                    Episode {number}
                                </Text>
                                <Ionicons name="download-outline" size={24} color={colors.text} />
                            </View>
                        ))}
                    </View>
                )}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    emptyText: {
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
        fontSize: 24,
        fontWeight: "bold",
    },

    type: {
        fontSize: 12,
        fontWeight: "bold",
        letterSpacing: 2,
        marginLeft: 6,
    },

    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 6,
    },

    info: {
        fontSize: 14,
        marginTop: 6,
    },

    rank: {
        alignSelf: "flex-start",
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
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: "center",
        marginTop: 15,
    },

    playText: {
        fontSize: 16,
        fontWeight: "bold",
    },

    downloadButton: {
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: "center",
        marginTop: 10,
    },

    downloadText: {
        fontSize: 16,
        fontWeight: "bold",
    },

    progressBar: {
        width: "100%",
        height: 4,
        marginTop: 12,
    },

    progressFill: {
        height: "100%",
    },

    description: {
        fontSize: 14,
        lineHeight: 20,
        marginTop: 15,
    },

    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
    },

    action: {
        alignItems: "center",
    },

    actionText: {
        fontSize: 12,
        marginTop: 4,
    },

    episodes: {
        paddingBottom: 40,
    },

    tab: {
        alignSelf: "flex-start",
        borderTopWidth: 3,
        paddingTop: 8,
        marginTop: 25,
        marginLeft: 15,
    },

    tabText: {
        fontSize: 15,
        fontWeight: "bold",
    },

    episode: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 12,
    },

    episodeTitle: {
        flex: 1,
        fontSize: 14,
    },
});