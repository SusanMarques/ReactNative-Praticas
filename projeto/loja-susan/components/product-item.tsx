import {View, Text, StyleSheet, Image, Button, Linking } from 'react-native';
import { Product } from '../types/Products';

type Props={
    product: Product
}

export const ProductItem = (props: Props) => {
    const carrinho = () =>{
       // alert("Comprando o item: "+ props.product.name)
        const url = 'https://web.whatsapp.com/';
       Linking.openURL(url).catch(err =>{
        console.error("Failed to open the Url", err);
        alert("Não foi possível abrir o link!");
       })
    }
    return (
        <View style={styles.container}>
            <Image
            source={{uri: props.product.image}}
            style={styles.image}
            />
            <View style={styles.info}>
                <Text style={styles.name}>{ props.product.name}</Text>
                <Text style={styles.price}>{ props.product.price.toFixed(2)}</Text>
                <Button title='comprar' onPress={carrinho}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginBottom: 20
    },
    image:{
        width:100,
        height: 100,
    },
    info:{
       flex: 1,
       marginLeft: 15
    },
    price:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'brown'
    },
    name:{
        fontSize: 18
    }

})