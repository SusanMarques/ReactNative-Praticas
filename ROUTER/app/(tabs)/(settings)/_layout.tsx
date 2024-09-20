import { Stack } from "expo-router";

export default function rootlayot() {

    return(
        <Stack screenOptions={{
            headerTitleAlign: 'center',
            
        }}>
            <Stack.Screen name="index" options={{headerShown: false}}/>
          
 
        
        </Stack>
    );

}