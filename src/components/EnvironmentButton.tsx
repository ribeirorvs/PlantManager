import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';
import {
    RectButton,
    RectButtonProps
} from 'react-native-gesture-handler';

import colors from '../styles/colors';
import font from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

export function EnvironmentButton({
    title,
    active = false,
    ...rest
}: EnvironmentButtonProps) {
    return (
        < RectButton
            style={styles.container}
            {...rest}
        >
            < Text style={styles.text}>
                {title}
            </Text>
        </ RectButton>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    text: {

    }
})