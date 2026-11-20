import { View, Text, Button, FlatList } from "react-native";
import { styles } from "../style_sheets/styles";
import { useDispatch, useSelector } from "react-redux";
import { increaseGoal, decreaseGoal } from "../redux/reducers/goalSlice";
import { useNavigation } from '@react-navigation/native';


export default function Overview() {
    const dispatch = useDispatch();
    const overallGoals = useSelector(state => state.goal.overall);
    const completedGoals = useSelector(state => state.goal.completed)
    const goals = useSelector(state => state.goal.goals)

    const navigation = useNavigation();

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
                    onPress={() => navigation.navigate('Add')}
                />
                <Button
                    title="MANAGE GOALS"
                />
            </View>

            {goals.length == 0 ? <Text>No goals to display.</Text> :
            <FlatList
                data={goals}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{ item.name }</Text>
                        <Text>{ item.due != '' ? item.due : "No due date" }</Text>
                        <Text>{ item.desc != '' ? item.desc : "No descripton" }</Text>
                    </View>
                )}
            />}
            
        </View>
    )
}