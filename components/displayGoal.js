import { Text, View } from "react-native";
import { styles } from "../style_sheets/styles";

export default function DisplayGoal({ goal }) {
    return (
        <>
            <View style={styles.flexRow}>
                <Text style={styles.subtitle}>{ goal.name } </Text>
                <Text style={styles.date}>{ goal.due != '' ? goal.due : "N/A" }</Text>
            </View>
            <Text style={styles.desc}>{ goal.desc != '' ? goal.desc : "No descripton" }</Text>
        </>
    )
}