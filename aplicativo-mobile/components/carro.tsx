import {Text} from "react-native";

type Props = {
modelo: string;
ano: number;
qntportas: number;
}

export const Carro = (props: Props)=>{
    return(
        <Text>carro de Modelo: {props.modelo} , data de fabricação:{props.ano}, Numero de portas:{props.qntportas}</Text>
    )
}