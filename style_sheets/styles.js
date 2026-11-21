import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",
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

    subtitle: {
        fontSize: 20,
        marginBottom: 5,
    },

    input: {
        width: 250,
        borderWidth: 1,
        borderColor: "#999",
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontSize: 17,
    },

    message: {
        color: '#891212',
        backgroundColor: '#e9e9e9',
        fontSize: 17,
        padding: 5,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 5,
        width: 250,
        textAlign: 'center'
    },

    spacer1: {
        margin: 10
    },
    spacer2: {
        margin: 20
    },
});