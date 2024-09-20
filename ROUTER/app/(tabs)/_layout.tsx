import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome"
export default function tablayout (){
    return(
        <Tabs
         screenOptions={{
            tabBarActiveTintColor: 'red'
         }}
        >
            <Tabs.Screen
                name="(settings)"
                options={{
                    title:'Settings',
                     headerTitleAlign: 'center',
                     tabBarIcon : ({color})  => <FontAwesome size={28}  name ="user" color={color}/>
                }}
            />
            <Tabs.Screen
                name="home"
                options={{
                    title:'Home',
                     headerTitleAlign: 'center',
                    tabBarIcon : ({color}) => <FontAwesome size={28} name="home"/>
                }}
            />
            
        </Tabs>
    )
}