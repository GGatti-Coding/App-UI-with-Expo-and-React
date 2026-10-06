import { Ionicons } from "@expo/vector-icons";
import {
    Alert,
    Button,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { categories } from "@/data/categories";


export default function RootLayout() {
    return <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>

            <Text style={styles.logo}>N</Text>
            <Text style={styles.title}>Home</Text>

            <View style={styles.headerIcons}>
                <Ionicons name="download-outline" size={25} color="white" />
                <Ionicons name="notifications-outline" size={25} color="white" />
            </View>
        </View>

        {/* Categories */}
        <ScrollView horizontal>
            <View style={styles.categories}>
                {categories.map((cat) => (
                    <View key={cat} style={styles.category}>
                        <Text style={styles.categoryText}>{cat}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
            {/* Home */}
            <View style={styles.navItem}>
                <Ionicons name="home" size={24} color="white" />
                <Text style={styles.navText}>Home</Text>
            </View>
            {/* Search */}
            <View style={styles.navItem}>
                <Ionicons name="search" size={24} color="white" />
                <Text style={styles.navText}>Search</Text>
            </View>
            {/* My Netflix */}
            <View style={styles.navItem}>
                <Ionicons name="person" size={24} color="white" />
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
    </View>
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
        marginLeft: 3,
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
        paddingTop: 5,
        gap: 15,
    },

    categories: {
        flexDirection: "row",
        paddingTop: 5,
        gap: 8,
        marginRight: 10,
        marginLeft: 5,
    },

    category: {
        backgroundColor: "black",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },

    categoryText: {
        fontSize: 14,
        color: "white",
    },

    bottomNav: {
        position: "absolute",
        bottom: 50,
        alignSelf: "center",

        height: 60,
        width: "70%",

        backgroundColor: "black",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "gray",

        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
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