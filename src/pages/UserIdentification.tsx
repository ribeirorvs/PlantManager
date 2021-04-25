import content from '*.png';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

export function UserIdentification() {
    return (
        < SafeAreaView style={style.container}>
            < View style={style.content}>
                < View style={style.form}>
                    < Text style={style.emoji}>
                        :D
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    emoji: {

    }
})