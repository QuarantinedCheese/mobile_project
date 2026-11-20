import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../style_sheets/styles";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";


export default function Login() {
    const user = 'Admin';
    const pass = '1234'

    const navigation = useNavigation();
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const handleFormChange = (text, field) => {
        if (field == 'user') {
            setLoginData({...loginData, username: text});
        } else if (field == 'pass') {
            setLoginData({...loginData, password: text});
        }
    };

    const handleFormSubmit = () => {
        if (loginData.username == user && loginData.password == pass) {
            navigation.navigate('Home');
        }
    }

    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>

            <Text>Username:</Text>
            <TextInput
                placeholder="username..."
                value={loginData.username}
                onChangeText={(txt) => handleFormChange(txt, 'user')}
            />

            <Text>Password:</Text>
            <TextInput
                placeholder="username..."
                value={loginData.password}
                onChangeText={(txt) => handleFormChange(txt, 'pass')}
            />

            <Button
                title="LOGIN"
                onPress={handleFormSubmit}
            />
        </View>
    )
}