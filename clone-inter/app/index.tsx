import { Link } from "expo-router";
import { StatusBar, Text, StyleSheet, Pressable, Image, TextInput, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function screen (){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar/>
        
            <Image source={require("../assets/duvida-inter.png")}
                style={styles.imgDuvida}
                resizeMode="cover"
            />
            <Image source={require("../assets/logo-inter.png")}
                style={styles.imgInter}
                resizeMode="cover"
            />
            <View style={styles.blocoConta}>
                <Text style={styles.circuloNome}>SM</Text>
                <Pressable style={styles.botaoConta}>
                    <Text style={styles.txtConta}>Susan Marques</Text>
                    <Text style={styles.txtCpf}>***.098.987-**</Text>
                </Pressable>
                <Text style={styles.trocar}>Trocar</Text>
            </View>

            <Text style={styles.senha}>Senha</Text>
            <TextInput style={styles.inputSenha} placeholder="Digite sua senha"></TextInput>

            <Link href="/entrar" asChild>
                <Pressable style={styles.botao}>
                    <Text style={styles.btnTEXT}>Entrar</Text>
                </Pressable>
            </Link>

            <Pressable style={styles.botaoSenha}>
                <Text style={styles.btnTEXTSenha}>Não sei minha senha</Text>
            </Pressable>
            <Image
                source={require("../assets/digital.png")}
                style={styles.imgDigital}
                resizeMode="cover"
                />
            <Text style={styles.impressaoDigital}>Entre utilizando sua {'\n'}impressão digital</Text>

            <View style={styles.textoDeBaixoView}>
                <Image
                    source={require("../assets/isafe.png")}
                    style={styles.imgIsafe}
                    resizeMode="cover"
                />
                <Text style={styles.textoDeBaixoIsafe}>iSafe</Text>
                <Text style={styles.textoDeBaixo}>Trocar ou abrir conta</Text>
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
    },
    senha:{
        color: '#959497',
        fontWeight: '500',
        fontSize: 15,
        marginRight: 225,
        marginBottom: 5
    },
    inputSenha:{
        backgroundColor: '#F5F6FA',
        width: 280,
        borderRadius: 10,
        height: 40,
        paddingLeft: 10,
        fontWeight: '500',
        marginBottom: 10
    },
    botao:{
        width: 280,
        height: 40,
        backgroundColor: '#EA7100',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
        margin: 15
    },
    botaoSenha:{
        width: 280,
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#EA7100',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
    },
    botaoConta:{
       margin: 20
    },
    blocoConta:{
        width: 280,
        height: 80,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#F5F6FA',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row'
    },
    trocar:{
        color: '#EA7100',
        fontWeight: '600'
    },
    circuloNome:{
        color: '#EA7100',
        fontWeight: '600',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 50,
        padding: 2,
        borderColor: '#EA7100'
    },
    txtConta:{
        color: '#959497',
        fontWeight: '500',
        fontSize: 15,
        
    },
    txtCpf:{
        fontWeight:'600',
        fontSize: 17,
       
    },
    btnTEXT:{
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    }, 
    btnTEXTSenha:{
        color: '#EA7100',
        fontWeight: '500'
    },
    imgInter:{
        width: 140,
        height: 40,
        margin: 20
    },
    imgDuvida:{
        width: 40,
        height: 40,
        marginLeft: 250,
    },
    impressaoDigital:{
        textAlign: 'center',
        color: '#EA7100',
        fontWeight: '400',
        marginBottom: 70
    },
    textoDeBaixoView:{
       flexDirection: 'row',
    },
    textoDeBaixoIsafe:{
        color: '#EA7100',
        fontWeight: '600',
        marginRight: 75
    },
    textoDeBaixo:{
        color: '#EA7100',
        fontWeight: '600',
    },
    imgIsafe:{
        width: 20,
        height: 20
    },
    imgDigital:{
        width: 20,
        height: 20,
        marginTop: 35
    }
    
});