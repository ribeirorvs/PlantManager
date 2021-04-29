import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export function PlantSelect() {
    return (
        <SafeAreaView style={styles.container}>
            < View >
                < Text >
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    }
})