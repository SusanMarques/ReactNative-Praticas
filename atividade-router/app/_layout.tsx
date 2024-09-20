import { Stack } from "expo-router";

export default function layout(){

    return(
        <Stack screenOptions={{
            headerTitleAlign: 'center'
        }}>
            <Stack.Screen name="index" options={{title:'Bem Vindo!'}}/>
            {/* <Stack.Screen name="cadastro" options={{title: 'Tela de cadastro'}}/> */}
        </Stack>
    );
}