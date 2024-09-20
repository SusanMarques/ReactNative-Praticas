import { Link } from "expo-router";
import { StatusBar,FlatList ,Text, Image, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function screen (){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar/>
           <Text>Olá, tudo bem?</Text>
            <Link href="/Settings" asChild>
                <Pressable style={styles.botao}>
                    <Text style={styles.btnTEXT}>Ir para sobre</Text>
                </Pressable>
            </Link>
            {/* <Link href={'/auth/login'}>
                fazer login
            </Link>
            <Link href={'/termos'}>
                Termos de uso
            </Link>  */}
            
            <Link href={'profile/Jose'}>Perfil 1</Link>
            <Link href={'profile/Maria'}>Perfil 2</Link>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    botao:{
        width: 200,
        backgroundColor: 'royalblue',
        justifyContent: 'center',
        padding: 20,
        alignItems:'center',
        borderRadius: 15,
    },
    btnTEXT:{
        color: 'white',
        fontSize: 16
    },
    banner:{
        width: 330,
        height: 90
       }
});