import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import { Header } from '../components/Header';
import fonts from '../styles/fonts';

export function PlantSelect() {
    return (
        <SafeAreaView style={styles.container}>
            < View style={styles.header}>
                < Header />
                < Text style={styles.title}>
                    Em qual hambiente
            </Text>
                < Text style={styles.subtitle}>
                    você quer colocar sua planta?
            </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    title: {
        fontSize: 17,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle: {
        fontSize: 17,
        fontFamily: fonts.text,
        color: colors.heading,
        lineHeight: 20
    },
    header: {
        paddingHorizontal: 30
    }
})