import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text
} from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
    return (
        < SafeAreaView style={style.container} >
            < View style={style.content}>
                < Text style={style.emoji} >
                    :)
                </Text>
                < Text style={style.title} >
                    Prontinho
                </Text>
                < Text style={sytle.subtitle} >
                    Agora vamos começar a cuidar das suas{'\n'}
                    plantinhas com muito cuidado.
                </Text>
                < View style={style.footer}>
                    < Button />
                </View>
            </View>
        </SafeAreaView>
    )

    const style = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        title: {
            fontSize: 22,
            fontFamily: fonts.heading,
            textAlign: 'center',
            color: colors.heading,
            lineHeight: 38,
            marginTop: 15
        },
        subtitle: {
            fontFamily: fonts.text,
            textAlign: 'center',
            fontSize: 17,
            paddingVertical: 20,
            color: colors.heading
        },
        emoji: {
            fontSize: 32
        },
        footer: {
            width: '100%',
            paddingHorizontal: 75
        }
    })
}