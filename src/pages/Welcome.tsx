import React from 'react';
import {
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    View
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import fonts from '../styles/fonts';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/core';

export function Welcome() {

    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentification')
    }

    return (
        <SafeAreaView style={style.container}>
            < View style={style.wrapper}>
                <Text style={style.title}>
                    Gerencie{'\n'}
                    suas plantas{'\n'}
                    de forma fácil
                </Text>

                <Image
                    source={wateringImg}
                    style={style.image}
                    resizeMode='contain'
                />

                <Text style={style.subtitle}>
                    Não esqueça mais de regar suas plantas.{'\n'}
                    Nós cuidamos de lembrar você sempre que{'\n'}
                    precisar
                </Text>

                <TouchableOpacity
                    style={style.button}
                    activeOpacity={0.6}
                    onPress={handleStart}
                >
                    <Text>
                        <Feather
                            name='chevron-right'
                            style={style.buttonIcon}
                        />
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 60,
        fontFamily: fonts.heading
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.heading
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 32
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    }
})