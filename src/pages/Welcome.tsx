import React from 'react';
import { Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome() {
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>
                Gerencie{'\n'}
                suas plantas{'\n'}
                de forma fácil
            </Text>

            <Image source={wateringImg} style={style.image} />

            <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas.{'\n'}
                Nós cuidamos de lembrar você sempre que{'\n'}
                precisar
            </Text>

            <TouchableOpacity style={style.button} activeOpacity={0.6}>
                <Text style={style.buttonText}>
                    Avançar
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 60
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        paddingHorizontal: 10
    },
    image: {
        height: 284,
        width: 292
    },
    buttonText: {
        color: colors.white,
        fontSize: 24
    }
})