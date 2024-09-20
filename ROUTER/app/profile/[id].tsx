import { Stack, useLocalSearchParams } from "expo-router";
import { StatusBar, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RotaDinamica(){
    const {id} = useLocalSearchParams();
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <Stack.Screen options={{
                title: 'detalhes de: ' + id 
            }}/>
            <Text>Tela de detalhes:{id}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a2a2d3'
    },
});