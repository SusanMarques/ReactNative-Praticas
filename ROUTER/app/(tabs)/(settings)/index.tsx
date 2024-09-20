import { Link, router } from "expo-router";
import { StatusBar, Text, StyleSheet, Pressable, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function screen() {
    const click = () => {
        router.navigate('/');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />

            <View style={styles.blocoPerfil}>
                <Image
                    source={require('../../../assets/perfil.jpg')}
                    resizeMode="cover"
                    style={styles.perfil}
                />
                <View style={styles.blocoPerfilTexto}>
                    <Text style={styles.nome}>SusanKarin_dev</Text>
                    <Text style={styles.descricao}>Developer front-end</Text>
                </View>
                <FontAwesome name="angle-right" size={25} color="grey" style={styles.seta} />
            </View>

            <Link href='/teste' style={styles.blocoMarginTop10} asChild>
                <Pressable onPress={click} >
                    <Image
                        source={require('../../../assets/estrelaicon.png')}
                        resizeMode="cover"
                        style={styles.imageicon}
                    />
                    <Text style={styles.titulo}>Starred Messages</Text>
                    <FontAwesome name="angle-right" size={25} color="grey" style={styles.seta} />
                </Pressable>
            </Link>

            <Link href='/teste' style={styles.blocoMarginTop1} asChild>
                <Pressable onPress={click} >
                    <Image
                        source={require('../../../assets/laptop.png')}
                        resizeMode="cover"
                        style={styles.imageicon}
                    />
                    <Text style={styles.titulo}>WhatsApp Web/Desktop</Text>
                    <FontAwesome name="angle-right" size={25} color="grey" style={styles.seta} />
                </Pressable>
            </Link>

            <Link href='/teste' style={styles.blocoMarginTop10} asChild>
            <Pressable onPress={click} >
                <Image
                    source={require('../../../assets/chave.png')}
                    resizeMode="cover"
                    style={styles.imageicon}
                />
                <Text style={styles.titulo}>Account</Text>
                <FontAwesome name="angle-right" size={25} color="grey" style={styles.seta} />
            </Pressable>
            </Link>

            <Link href='/teste' style={styles.blocoMarginTop1} asChild>
                <Pressable onPress={click} >
                <Image
                    source={require('../../../assets/whatsapp.png')}
                    resizeMode="cover"
                    style={styles.imageicon}
                />
                <Text style={styles.titulo}>Chats</Text>
                <FontAwesome name="angle-right" size={25} color="grey" style={styles.seta} />
            </Pressable>
            </Link>

            <Link href='/teste' style={styles.blocoMarginTop1} asChild>
                <Pressable onPress={click} >
                <Image
                    source={require('../../../assets/notif.png')}
                    resizeMode="cover"
                    style={styles.imageicon}
                />
                <Text style={styles.titulo}>Notifications</Text>
                <FontAwesome name="angle-right" size={25} color="grey" style={styles.seta} />
                </Pressable>
            </Link>

            <Link href='/teste' style={styles.blocoMarginTop1} asChild>
                <Pressable onPress={click} >
                <Image
                    source={require('../../../assets/data.png')}
                    resizeMode="cover"
                    style={styles.imageicon}
                />
                <Text style={styles.titulo}>Data and Storage Usage</Text>
                <FontAwesome name="angle-right" size={25} color="grey" style={styles.seta} />
                </Pressable>
            </Link>

            <Link href='/teste' style={styles.blocoMarginTop10} asChild>
                <Pressable onPress={click} >
                <Image
                    source={require('../../../assets/help.png')}
                    resizeMode="cover"
                    style={styles.imageicon}
                />
                <Text style={styles.titulo}>Help</Text>
                <FontAwesome name="angle-right" size={25} color="grey" style={styles.seta} />
                </Pressable>
            </Link>

            <Link href='/teste' style={styles.blocoMarginTop1} asChild>
                <Pressable onPress={click} >
                <Image
                    source={require('../../../assets/friend.png')}
                    resizeMode="cover"
                    style={styles.imageicon}
                />
                <Text style={styles.titulo}>Tell a Friend</Text>
                <FontAwesome name="angle-right" size={25} color="grey" style={styles.seta} />
                </Pressable>
            </Link>

            <Text style={styles.textoFooter}>Whatsapp from Facebook</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    perfil: {
        borderRadius: 115,
        width: 40,
        height: 40,
        marginTop: 10,
        marginLeft: 10,
    },
    blocoPerfil: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: '100%',
        height: '12%',
        alignItems: 'center',
        position: 'relative',
    },
    blocoPerfilTexto: {
        margin: 10,
        flex: 1,
    },
    nome: {
        fontWeight: '700',
        fontSize: 15,
    },
    descricao: {
        color: 'grey',
        fontWeight: '500',
    },
    imageicon: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
    titulo: {
        fontWeight: '400',
        marginLeft: 10,
        flex: 1,
    },
    seta: {
        position: 'absolute',
        right: 10,
    },
    blocoMarginTop10: {
        marginTop: '10%',
        backgroundColor: '#ffffff',
        width: '100%',
        height: '8%',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
    },
    blocoMarginTop1: {
        marginTop: 1,
        backgroundColor: '#ffffff',
        width: '100%',
        height: '8%',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
    },
    textoFooter:{
       color: 'grey',
       fontSize: 12,
    }
});
