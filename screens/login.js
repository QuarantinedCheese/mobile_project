import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../style_sheets/styles";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";


export default function Login() {
    const user = 'Admin';
    const pass = '1234';

    const navigation = useNavigation();
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });
    const [message, setMessage] = useState('');


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
            setMessage('');
        } else {
            setMessage("Username or password incorrect.");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <Text style={styles.subtitle}>Username:</Text>
            <TextInput
                placeholder="enter username..."
                value={loginData.username}
                onChangeText={(txt) => handleFormChange(txt, 'user')}
                style={styles.input}
            />

            <Text style={styles.subtitle}>Password:</Text>
            <TextInput
                placeholder="enter password..."
                value={loginData.password}
                onChangeText={(txt) => handleFormChange(txt, 'pass')}
                style={styles.input}
            />

            <Text style={styles.message}>{message}</Text>

            <View style={styles.spacer2}><Button
                title="LOGIN"
                onPress={handleFormSubmit}
            /></View>
        </View>
    )
}