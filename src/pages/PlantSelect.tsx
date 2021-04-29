import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import colors from '../styles/colors';
import { Header } from '../components/Header';
import fonts from '../styles/fonts';
import { EnvironmentButton } from '../components/EnvironmentButton';

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
            < View >
                < FlatList
                    data={[1, 2, 3, 4, 5]}
                    renderItem={({ item }) => (
                        < EnvironmentButton
                            title="Cozinha"
                            active
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.environmentList}
                />
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
    },
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 30,
        marginVertical: 32
    }
})