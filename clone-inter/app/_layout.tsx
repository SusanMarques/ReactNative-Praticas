import { Stack } from "expo-router";

export default function rootlayot() {

    return(
        <Stack screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'pink' },
            presentation: 'modal'
            
        }}>
            <Stack.Screen name="index" options={{title: 'HOME', headerShown: false}}/>
            <Stack.Screen name="entrar" options={{title: 'Sobre', headerShown: false}}/>
        </Stack>
    );

}