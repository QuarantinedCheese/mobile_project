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
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 15,
    },

    subtitle: {
        fontSize: 25,
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

    goal: {
        borderWidth: 2,
        borderColor: '#999',
        borderRadius: 10,
        margin: 2,
        marginBottom: 15,
        padding: 5,
    },

    goals: {
        flex: 1,
        width: '95%',
        height: '50%',
        borderWidth: 1,
        borderColor: "#999",
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        paddingTop: 15,
        marginTop: 10,
    },

    date: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'right',
        color: '#999'
    },
    
    desc: {
        fontSize: 18,
        marginBottom: 5,
        color: '#737373'
    },

    spacer1: {
        margin: 10
    },
    spacer2: {
        margin: 20
    },
});