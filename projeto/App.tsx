import { StyleSheet, Text, View, SafeAreaView, Button, StatusBar } from 'react-native';
import React from 'react';
import { useState } from 'react';

export default function App() {
const [count, setCount] = useState(0);

  function somar(){
    setCount(count +1)
  }

  function sub(){

    if(count > 0){
      setCount(count - 1)
    }else{

    }

  }
  return (
    <SafeAreaView>
      <StatusBar/>
      <View style={styles.container}>
      <Button color="#841584" title='+' onPress={somar}/>
        <Text style={styles.txt} >{count}</Text>
      <Button color="blue" title='-' onPress={sub}></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    backgroundColor: '#fff',
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row"
  },

  txt:{
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    fontSize: 50
  }

});
