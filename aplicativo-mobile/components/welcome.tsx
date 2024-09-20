import {Text} from "react-native";

type Props ={
    name: string;
    age: number;
    on: boolean;
}

 export const Welcome = (props: Props) =>{
    return(
        <Text>Oi {props.name}, tudo bem? , Você tem {props.age} anos. {props.on}</Text>
    )
}

