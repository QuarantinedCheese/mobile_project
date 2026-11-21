import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },

    flexRow: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 10,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15,
    },

    input: {
        width: 250,
        borderWidth: 1,
        borderColor: "#999",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});