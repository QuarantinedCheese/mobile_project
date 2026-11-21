import { View, Text, Button, FlatList } from "react-native";
import { styles } from "../style_sheets/styles";
import { useDispatch, useSelector } from "react-redux";
import DisplayGoal from "../components/displayGoal";

import { removeGoal, increaseCompleted } from "../redux/reducers/goalSlice";


export default function RemoveGoal() {
    const goals = useSelector(state => state.goal.goals);

    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Manage Goals</Text>

            <View style={styles.goals}>
            {goals.length == 0 ? <Text>No goals to manage.</Text> :
            <FlatList
                data={goals}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.goal}>
                        <DisplayGoal goal={item}/>
                        <View style={styles.flexRow}>
                            <Button
                                title="REMOVE"
                                onPress={() => dispatch(removeGoal(item))}
                            />
                            <Button
                                title="MARK COMPLETE"
                                onPress={() => {
                                    dispatch(removeGoal(item));
                                    dispatch(increaseCompleted(1));
                                }}
                            />
                        </View>
                    </View>
                )}
            />}</View>
        </View>
    )
}