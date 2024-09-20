import { SafeAreaView, StyleSheet, Text, View,StatusBar, ScrollView, Pressable, Button } from 'react-native';

export default function App() {
  
  const click = () => {
    alert('funcionou!')
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      {/* <View style={styles.azul}></View>
      <ScrollView style={styles.scroll} horizontal={true}>
      <View style={styles.verde}></View>
      <View style={styles.amarelo}></View>
      <View style={styles.vermelho}></View>
      </ScrollView> */}

      <Button title='clique aqui' onPress={click}/>

      <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'red' : 'black',
          }, styles.btn 
        ]}>
        <Text style={styles.btnText}> Clique aqui!</Text>
      </Pressable>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  scroll:{
    flex: 1,
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
  }
});
