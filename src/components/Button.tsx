import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface buttonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: buttonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            < Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading
    }
})