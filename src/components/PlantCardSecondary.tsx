import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    RectButton,
    RectButtonProps
} from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
        hour: string;
    }
}

export const PlantCardSecondary = ({ data, ...rest }: PlantProps) => {
    return (
        < RectButton
            style={styles.container}
            {...rest}
        >
            < SvgFromUri
                uri={data.photo}
                width={60}
                height={60}
            />
            < Text style={styles.title}>
                {data.name}
            </Text>
            <View>
                <Text style={styles.time}>
                    Regar às
                </Text>
                <Text style={styles.timeLabel}>
                    {data.hour}
                </Text>
            </View>

        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '100%',
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.shape,
        marginVertical: 5
    },
    title: {
        fontFamily: fonts.heading,
        flex: 1,
        marginLeft: 10,
        fontSize: 17,
        color: colors.heading
    },
    time: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: fonts.heading,
        color: colors.body_dark
    },
    timeLabel: {
        fontSize: 20,
        fontFamily: fonts.text,
        color: colors.body_light
    }
})