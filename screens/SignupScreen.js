import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';
import { auth, db } from '../firebaseConfig'; // Caminho do firebaseConfig
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const SignupScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignup = async () => {
        if (!email || !password || !username) {
            Alert.alert('Atenção', 'Por favor, preencha todos os campos');
            return;
        }

        setLoading(true);

        try {
            // Criar o usuário com e-mail e senha
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Adicionar informações do usuário no Firestore
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                username: username,
                email: user.email,
                createdAt: serverTimestamp(),
            });

            navigation.replace('Home'); // Navegar para a tela inicial após o signup
        } catch (error) {
            console.error('Erro ao criar conta:', error.message);
            Alert.alert('Erro', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Crie sua Conta</Text>
            <Image source={require('../assets/woman.png')} style={styles.image} />
            <TextInput
                style={styles.input}
                placeholder="Nome de usuário"
                placeholderTextColor="#B0E0E6"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Seu e-mail"
                placeholderTextColor="#B0E0E6"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Sua senha"
                placeholderTextColor="#B0E0E6"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={loading}>
                <Text style={styles.buttonText}>{loading ? 'Carregando...' : 'Inscreva-se'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginContainer} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>Já tem uma conta? Entre aqui!</Text>
            </TouchableOpacity>
        </View>
    );
};

// Estilos da tela
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6495ED',
        padding: 20,
    },
    headerText: {
        fontSize: 28,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 15,
        color: '#FFFFFF',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 20,
    },
    buttonText: {
        color: '#6495ED',
        fontWeight: 'bold',
        fontSize: 16,
    },
    loginContainer: {
        marginTop: 15,
    },
    loginText: {
        color: '#FFFFFF',
        textDecorationLine: 'underline',
    },
});

export default SignupScreen;
