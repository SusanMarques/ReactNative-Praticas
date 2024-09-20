import { StyleSheet, Text, View, StatusBar, SafeAreaView, Button, Image, TextInput  } from 'react-native';
import{useState} from 'react';

export default function App() {
  const [areaShow, setAreaShow] = useState(false);
  const [areaProduto, setAreaProduto] = useState(false);

  const mostrar = () => {
   setAreaShow(!areaShow)
  };

  const [campo, setCampo]= useState('yesye');
  const guardar = ()=>{
    alert(campo)
  }

  const mostrarproduto = () =>{
    setAreaProduto(!areaProduto)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Button title='Apareça / desapareça' onPress={mostrar}/>
      {areaShow === true && <View style={styles.area}>
        <Text style={styles.areaTXT}>Area Secreta</Text>
      </View> }

      <View style={styles.botao}>
        <Button title='produto1' onPress={mostrarproduto} color={'#232F3E'}/>
        {areaProduto === true && <View style={styles.bloco}>
          <Image source={{uri:"https://m.media-amazon.com/images/I/61NWJn5qjyL._AC_SX679_.jpg"}}
          style={styles.img}/>
          <View>
          <Text style={styles.texto}>Cetaphil Healthy Renew Revitalising Eye Serum 15ml</Text>
          <Text style={styles.preco}>Preço: 99,50</Text>
          <Button title='comprar' color={'#232F3E'}></Button>
          </View>
          </View>}

          <TextInput
          style={styles.input}
          placeholder='Digite seu nome'
          value={campo}
          onChangeText={setCampo}
          />
          <Button title='o que foi digitado?' onPress={guardar}/>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
  },
  area:{
    backgroundColor: '#333333',
    margin:20,
    padding: 20,
    borderRadius: 15
  },
  areaTXT:{
    color: '#ffffff',
    textAlign: 'center'
  },
  botao:{
    margin: 20,
  },
  img:{
    width:100,
    height: 200,
    marginLeft: 10,
    marginTop: 10, 
    marginRight: 10
  },
  bloco:{
    flexDirection:'row',
    width: 150
  },
  texto:{
    fontSize: 18,
    marginTop: 10
  },
  preco:{
    fontSize:20,
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 10
  },
  input:{
    width: 200,
    height: 50,
    backgroundColor: '#ddd',
    margin: 20,
    borderRadius: 50,
    padding: 10
  }

});
