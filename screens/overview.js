import { View, Text, Button } from "react-native";
import { styles } from "../style_sheets/styles";
import { useDispatch, useSelector } from "react-redux";
import { increaseGoal, decreaseGoal } from "../redux/reducers/goalSlice";

export default function Overview() {
    const dispatch = useDispatch();
    const overallGoals = useSelector(state => state.goal.overall);
    const completedGoals = useSelector(state => state.goal.completed)


    return (
        <View style={styles.container}>
            <Text>Overview</Text>

            <Text>Goals Completed:</Text>
            <View style={styles.flexRow}>
                <Button title="-" onPress={() => dispatch(decreaseGoal(1))}/>
                <Text> {completedGoals} / {overallGoals} </Text>
                <Button title="+" onPress={() => dispatch(increaseGoal(1))}/>
            </View>

            <Text>Movie Quote/Joke</Text>

            <View style={styles.flexRow}>
                <Button
                    title="ADD GOAL"
                />
                <Button
                    title="MANAGE GOALS"
                />
            </View>
            
        </View>
    )
}