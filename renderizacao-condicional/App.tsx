import { StyleSheet, Text, View, StatusBar, SafeAreaView, Button, Image, TextInput, ScrollView} from 'react-native';
import{useState} from 'react';

export default function App() {
  

  const [nome, setNome]= useState('');
  const [email, setEmail]= useState('');
  const [endereco, setEndereco]= useState('');
  const [nascimento, setNascimento]= useState('');
  const [sexo, setSexo]= useState('');
  const [telefone, setTelefone]= useState('');
  const [escolaridade, setEscolaridade]= useState('');
  const guardar = ()=>{
    alert( `Nome: ${nome}\nEmail: ${email}\nEndereço: ${endereco}\nNascimento: ${nascimento}\nSexo: ${sexo}\nTelefone: ${telefone}\nEscolaridade: ${escolaridade}`)
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <ScrollView>
      <View style={styles.form}>
        <Text style={styles.tituloPrincipal}>Formulário do cliente</Text>
        <Text style={styles.titulo}>Nome:</Text>
          <TextInput
          style={styles.input}
          placeholder='Digite seu nome'
          placeholderTextColor={"#fff"}
          value={nome}
          onChangeText={setNome}
          />
          <Text style={styles.titulo}>email:</Text>
          <TextInput
          style={styles.input}
          placeholder='Digite seu email'
          placeholderTextColor={"#fff"}
          value={email}
          onChangeText={setEmail}
          />
          <Text style={styles.titulo}>endereço:</Text>
          <TextInput
          style={styles.input}
          placeholder='Digite seu endereco'
          placeholderTextColor={"#fff"}
          value={endereco}
          onChangeText={setEndereco}
          />
          <Text style={styles.titulo}>data de nascimento:</Text>
          <TextInput
          style={styles.input}
          placeholder='Digite sua data de nascimento'
          placeholderTextColor={"#fff"}
          value={nascimento}
          onChangeText={setNascimento}
          />
          <Text style={styles.titulo}>sexo:</Text>
          <TextInput
          style={styles.input}
          placeholder='Digite o sexo'
          placeholderTextColor={"#fff"}
          value={sexo}
          onChangeText={setSexo}
          />
          <Text style={styles.titulo}>telefone:</Text>
          <TextInput
          style={styles.input}
          placeholder='Digite seu telefone'
          placeholderTextColor={"#fff"}
          value={telefone}
          onChangeText={setTelefone}
          />
          <Text style={styles.titulo}>escolaridade:</Text>
          <TextInput
          style={styles.input}
          placeholder='Digite sua escolaridade'
          placeholderTextColor={"#fff"}
          value={escolaridade}
          onChangeText={setEscolaridade}
          />
          <View style={styles.botao}>
            <Button color={'#0E59D9'} title='consultar formulário' onPress={guardar}/>
          </View>
      </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    backgroundColor:'#E0F2FF'
  },
  tituloPrincipal:{
    fontSize: 25,
    textAlign: 'center',
    color: '#214587',
    fontWeight: '600',
    marginBottom: 20
  },
  form:{
    margin: 20,
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
  titulo:{
    color: '#214587',
    shadowColor: '#000000',
    fontSize: 20,
    fontWeight: '500'
  },
  botao:{
    marginTop:20
  }

});
