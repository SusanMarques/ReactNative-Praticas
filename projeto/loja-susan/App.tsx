import { SafeAreaView, StyleSheet, Text, View, Image, StatusBar, FlatList } from 'react-native';
import {list} from './data'
import { ProductItem } from './components/product-item';
import { Product } from './types/Products';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Image
      source={require('./assets/bolsa-loja.jpg')}
      resizeMode ='cover'
      style={styles.hero}
      />
      <View style={styles.area}>
        <Text style={styles.h1}>Produtos</Text>
        <FlatList
        data={list}
        renderItem={({item}:{item:Product}) => (<ProductItem product={item}/>)}
        keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
  hero:{
    width: '100%'
   
  },
  area:{
    padding: 10
  },
  h1:{
    fontSize: 24,
    marginBottom: 10,
    
  }
});
