import {Redirect, router, Stack} from 'expo-router';
import { Text , Pressable, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function layout (){

    function click(){
        router.navigate('/cadastro')
    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <Text>Bem vindo! aperte o botão para fazer o cadastro:</Text>
            <Pressable style={styles.botao} onPress={click}>
                <Text>Cadastro</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao:{
        backgroundColor:'royalblue',
        width: 100,
        height:30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 10
    }
});