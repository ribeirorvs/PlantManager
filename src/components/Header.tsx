import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import colors from '../styles/colors';

export function Header() {
    return (
        < View
            style={styles.container}
        >

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: colors.red
    }
})