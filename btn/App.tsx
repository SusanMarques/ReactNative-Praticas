import { SafeAreaView, StyleSheet, Text, View,StatusBar, ScrollView, Pressable, Button, TouchableOpacity, TextInput} from 'react-native';
import{useState} from 'react';

export default function App() {
  const [nome, setNome]= useState('');
  const [quantidade, setQuantidade] = useState('');
  const [precocompra, setPrecocompra] = useState('');
  const [precoVenda, setPrecoVenda] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [marca, setMarca] = useState('');
  
  const guardar = ()=>{
    alert( `Nome: ${nome}\nQNT: ${quantidade}\nPreço de compra: ${precocompra}\nPreço de venda: ${precoVenda}\nFornecedor: ${fornecedor}\nMarca: ${marca}`)
  }

  const click = () => {
    alert('funcionou!')
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <ScrollView>
      <Text style={styles.tituloPrincipal}>Cadastro de produtos</Text>
      <Text style={styles.titulo}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite o nome do produto'
          placeholderTextColor={"#fff"}
          value={nome}
          onChangeText={setNome}
        />

      <Text style={styles.titulo}>Quantidade:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite a quantidade'
          placeholderTextColor={"#fff"}
          value={quantidade}
          onChangeText={setQuantidade}
        />
      <Text style={styles.titulo}>Preço de compra</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite o preço de compra'
          placeholderTextColor={"#fff"}
          value={precocompra}
          onChangeText={setPrecocompra}
        />
      <Text style={styles.titulo}>Preço de venda</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite o preço de venda'
          placeholderTextColor={"#fff"}
          value={precoVenda}
          onChangeText={setPrecoVenda}
        />
      <Text style={styles.titulo}>fornecedor</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite o fornecedor'
          placeholderTextColor={"#fff"}
          value={fornecedor}
          onChangeText={setFornecedor}
        />
      <Text style={styles.titulo}>Marca</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite a marca'
          placeholderTextColor={"#fff"}
          value={marca}
          onChangeText={setMarca}
        />

      <View style={styles.botoes}>
      <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? '#31a9ff' : '#214587',
          }, styles.btn 
        ]} onPress={guardar}>
        <Text style={styles.btnText}> cadastrar</Text>
      </Pressable>
        
      <TouchableOpacity style={styles.button} onPress={click}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      </View>
     
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#E0F2FF'
  },
  scroll:{
    flex: 1,
  },
  titulo:{
    fontSize: 20,
    color: '#214587',
    shadowColor: '#000000',
    fontWeight: '500'
  },
  tituloPrincipal:{
    fontSize: 25,
    textAlign: 'center',
    color: '#214587',
    fontWeight: '600',
    marginBottom: 20
  },
  botoes:{
   alignItems: 'center'
  },
  input:{
    width: 250,
    height: 40,
    backgroundColor: '#31a9ff',
    margin: 10,
    borderRadius: 60 ,
    padding: 10,
    textAlign: 'center',
  },
  btn:{
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText:{
    color: '#ffffff'
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    borderRadius: 10,
    marginTop: 20
  }
});
