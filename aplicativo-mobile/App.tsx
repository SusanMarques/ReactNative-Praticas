import { View, Text, StyleSheet, StatusBar, SafeAreaView, Image} from "react-native";
import {Welcome} from  "./components/welcome"
import {Carro} from "./components/carro"

export default app;

function app(){
  return (
    <View>
      <SafeAreaView>
      <StatusBar/>
      <Text style={styles.Texto}> Seja bem vindo! </Text>
      <Welcome name = "jõao" age = {25} on ={false}/>
      <Welcome name = "joana" age = {30}  on ={true}/>
      <Welcome name = "marcos" age = {31} on ={false}/>
      <Welcome name = "lucas" age = {27} on ={true}/>

      <Carro modelo = "SUV" ano = {2024} qntportas ={4}/>
      <Carro modelo = "Crossover" ano = {2019} qntportas={4}/>
     
     <Image source={require("./assets/cachorro-astronauta.png")}
     style={styles.img}
     resizeMode="cover"
     />

    <Image 
    source={{uri:"https://imagens.mdig.com.br/thbs/45184mn.jpg"}}
    style={styles.img}
    
    />

     <View style={styles.bola}>
      <Text style={styles.textbola}>S</Text>
     </View>

     </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  Texto:{
    fontSize: 36,
    textAlign: "center",
    color: "#ff0000",
  },

  bola:{
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "red",

  },

  textbola:{
    color: "#ffffff",
    fontSize: 60,
  },

  img:{
    width:"100%",
    height:"30%"
  },

});