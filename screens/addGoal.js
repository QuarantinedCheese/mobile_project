import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../style_sheets/styles";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { appendGoal } from "../redux/reducers/goalSlice";
import { useSelector, useDispatch  } from "react-redux";


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
        if (field == 'name') {
            setGoalData({...goalData, name: text});
        } else if (field == 'due') {
            setGoalData({...goalData, due: text});
        } else if (field == 'desc') {
            setGoalData({...goalData, desc: text});
        }
    }

    const handleFormSubmit = () => {
        if (goalData.name == '') {
            setMessage("Name cannot be blank.")
        } else {
            // Temporarily using goals.length for ids, should be replaced with UUID or firebase's autos
            dispatch(appendGoal({...goalData, id: goals.length}))
            setGoalData(initial);
            navigation.goBack();
        }
    }

    return (
        <View style={styles.container}>
            <Text>Add Goal</Text>

            <Text>Name:</Text>
            <TextInput
                placeholder="name..."
                value={goalData.name}
                onChangeText={(txt) => handleFormChange(txt, 'name')}
            />

            <Text>Due:</Text>
            <TextInput
                placeholder="due..."
                value={goalData.due}
                onChangeText={(txt) => handleFormChange(txt, 'due')}
            />

            <Text>Desc:</Text>
            <TextInput
                placeholder="desc..."
                value={goalData.desc}
                onChangeText={(txt) => handleFormChange(txt, 'desc')}
                multiline={true}
                numberOfLines={5}
            />

            <Text>{message}</Text>
            <Button
                title="ADD"
                onPress={handleFormSubmit}
            />

        </View>
    )
}