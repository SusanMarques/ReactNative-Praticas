import {Redirect, router, Stack} from 'expo-router';
import { useState } from 'react';
import { Text , Pressable, StatusBar, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function layout (){

    const [nome, setNome] = useState('');

    function click(){
        alert(`nome: ${nome}`)
    }

    const [data, setData] = useState(new Date());
    

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <Text>Tela de cadastro</Text>
            <Text style={styles.titulo}>Nome</Text>
            <TextInput
            style={styles.input}
            placeholder='nome'
            value={nome}
            onChangeText={setNome}
            />

            <TextInput/>

            <Pressable>
                <Text style={styles.botao} onPress={click}>Cadastrar</Text>
            </Pressable>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
    input:{
        width:200,
        backgroundColor: '#DDD',
        borderRadius: 15,
        textAlign: 'center',
        marginTop: 10
    },
    titulo:{
        marginTop:20,
    },
    botao:{
        backgroundColor: 'royalblue',
        width: 200,
        textAlign: 'center',
        height: 30,
        marginTop: 10,
        borderRadius: 15,
        justifyContent: 'center',
    }
});