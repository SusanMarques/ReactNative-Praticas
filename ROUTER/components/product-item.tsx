import { Image, View, Text, Button, StyleSheet, ViewStyle, Linking} from 'react-native'
import { Product } from '../type/products'

type Props={
    product: Product
}

export const ProductItem = (props: Props) => {
    const detalhe = () =>{
        alert('detalhe do item '+props.product.nome)
        
    }
    return(
        <View style={styles.container}>
            <Image
            source={{uri: props.product.image}}
            style={styles.img}
            
            />
            <View >
                <Text style={styles.titulo}>{props.product.nome}</Text>
                <Text style={styles.descricao} >{props.product.descricao}</Text>
                <Text style={styles.preco}>{props.product.preco.toFixed(2)}</Text>
                <View style={styles.botao}>
                    <Button title='Detalhes' color='#27364B' onPress={detalhe}/>
                </View>
                
            </View>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#EBF0F4',
    
    },
    titulo:{
        fontSize: 20,
        width: 170
    },
    img:{
        margin: 10,
        width:60,
        height:120,
        marginBottom:30,
        marginLeft: 40,
        marginRight:30,
        borderRadius:10

    },
    botao:{
        width:100
    }, 
    descricao:{
        fontSize:16,
        width: 170
    },
    preco:{
        fontSize: 18,
        color: '#27364B',
        fontWeight: '700'
    }
    
});