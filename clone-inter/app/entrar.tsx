import { Link } from "expo-router";
import { StatusBar, Text, StyleSheet, Pressable, Image, TextInput, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function screen (){

    
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <View style={styles.superior}>
                <View style={styles.navSuperior}>
                    <Image
                        source={require('../assets/logo-inter-entrar.png')}
                        style={styles.inter}
                    />
                    <Image
                        source={require('../assets/lupa.png')}
                        style={styles.lupa}
                    />
                    <Image
                        source={require('../assets/hamburguer.png')}
                        style={styles.lupa}
                    />
                </View>
                
                <View style={styles.blocoSaldo}>
                    <Text style={styles.saldo}> R$ 1.000</Text>
                    <Image
                    source={require('../assets/icone-olho.png')}
                    />
                </View>
                
                <Text style={styles.extrato}>Ver extrato</Text>

                <View style={styles.cards}>
                
                    <Link href="/" asChild>
                        <Pressable style={styles.botao}>
                        <Image
                            source={require('../assets/investir.png')}
                            />
                            <Text style={styles.textoInvestir}>Investir</Text>
                        </Pressable>
                    </Link>
                    <Link href="/" asChild>
                        <Pressable style={styles.botao}>
                        <Image
                            source={require('../assets/pix.png')}
                            />
                            <Text style={styles.textoInvestir}>Pix</Text>
                        </Pressable>
                    </Link>
                    <Link href="/" asChild>
                        <Pressable style={styles.botao}>
                            <Image
                            source={require('../assets/economize.png')}
                            />
                            <Text style={styles.textoInvestir}>economize</Text>
                        </Pressable>
                    </Link>
                    
                </View>

            </View>

            <View style={styles.inferior}>
                <View style={styles.espacoSeta}>
                    <Image
                    source={require('../assets/seta.png')}
                    style={styles.seta}
                    />
                </View>

                <View style={styles.blocoOfertas}>
                    <Text style={styles.textoOfertas}>Ofertas para você</Text>
                    <Text style={styles.fechar}>X</Text>
                </View>

                <View style={styles.anuncioOferta}>
                    <Image
                    source={require('../assets/oferta-img.png')}
                    style={styles.seta}
                    />
                    <View style={styles.textosAnuncio}>
                    <Text style={styles.tituloAnuncio}>Oferta de Ouro</Text>
                    <Text>Aproveite 70% OFF {'\n'}+ 22% de cashback</Text>
                    <Text>No Inter Shop</Text>
                    </View>
                </View>

                <Image
                    source={require('../assets/intershop.png')}
                    style={styles.bannerInferior}
                    />

            </View>
            
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    inter:{
        width: 50,
        height: 18,
        marginRight: '50%',
        marginLeft: 26
    },
    lupa:{
        width: 25,
        height: 25,
        marginRight: 10
    },
    superior:{
        backgroundColor:'#FFFFFF',
        height: '30%',
        paddingTop: 30
    },
    navSuperior:{
        flexDirection: 'row',
    },
    saldo:{
        fontSize: 20,
        marginRight: 10
    },
    extrato:{
        color: '#EA7100',
        marginLeft: 28,
        fontWeight: '500'
    },
    blocoSaldo:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25
    },
    cards:{
        flexDirection: 'row',
        marginBottom: '50%'
    },
    botao:{
        width: 90,
        height: 90,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#EA7100',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 14
    },
    textoInvestir:{
        fontWeight: '600'
    },
    seta:{
        marginTop: 20,
       
    },
    espacoSeta:{
        alignItems: 'center',
        

    },
    inferior:{
        marginTop: 70,
        
    },
    textoOfertas:{
        fontWeight: '700',
        marginLeft: 25,
    },
    blocoOfertas:{
        flexDirection: 'row',
        marginTop: 30,
    },
    fechar:{
        color: '#EA7100',
        marginLeft: 150
    },
    anuncioOferta:{
        backgroundColor: '#fff',
        width: '70%',
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 50
    },
    textosAnuncio:{
        justifyContent: 'center'
    },
    tituloAnuncio:{
        fontSize: 18,
        fontWeight: '600'
    },
    bannerInferior:{
        width: 318,
        height: 100,
        marginTop: 10
    }
    
});