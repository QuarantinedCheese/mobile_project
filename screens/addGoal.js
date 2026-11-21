import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../style_sheets/styles";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { appendGoal } from "../redux/reducers/goalSlice";
import { useSelector, useDispatch } from "react-redux";

export default function AddGoal() {
    const goals = useSelector(state => state.goal.goals);
    const dispatch = useDispatch();

    const navigation = useNavigation();
    const initial = {
        name: '',
        due: '',
        desc: '',
    };

    const [goalData, setGoalData] = useState(initial);
    const [message, setMessage] = useState("");

    const handleFormChange = (text, field) => {
        if (field === 'name') {
            setGoalData({ ...goalData, name: text });
        }
        else if (field === 'due') {
            setGoalData({ ...goalData, due: text });
        }
        else if (field === 'desc') {
            setGoalData({ ...goalData, desc: text });
        }
    };

    const handleFormSubmit = () => {

        if (goalData.name === '') {
            setMessage("Name cannot be blank.");
        }
        else if (goalData.due === '') {
            setMessage("Due date cannot be blank.");
        }
        else {

            dispatch(
                appendGoal({
                    ...goalData,
                    id: Date.now().toString()
                })
            );

            setMessage("");
            setGoalData(initial);
            navigation.goBack();
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Add Goal</Text>
            <Text>Name:</Text>
            <TextInput style={styles.input} placeholder="Enter goal name..." value={goalData.name} onChangeText={(txt) => handleFormChange(txt, 'name') } />

            <Text>Due Date:</Text>
            <TextInput style={styles.input} placeholder="Nov 30, 2026" value={goalData.due} onChangeText={(txt) => handleFormChange(txt, 'due') }/>

            <Text>Description:</Text>
            <TextInput style={styles.input} placeholder="Enter description..." value={goalData.desc} onChangeText={(txt) =>
                handleFormChange(txt, 'desc')
                }
                multiline={true}
                numberOfLines={5}
            />

            <Text>{message}</Text>

            <Button
                title="ADD GOAL"
                onPress={handleFormSubmit}
            />
        </View>
    );
}