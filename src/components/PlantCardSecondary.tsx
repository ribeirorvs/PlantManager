import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated
} from 'react-native';
import {
    RectButton,
    RectButtonProps
} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri } from 'react-native-svg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Feather } from '@expo/vector-icons';

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
        hour: string;
    };
    handleRemove: () => void;

}

export const PlantCardSecondary = ({ data, handleRemove, ...rest }: PlantProps) => {
    return (
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <View>
                        <RectButton
                            style={styles.buttonRemove}
                            onPress={handleRemove}
                        >
                            <Feather name="trash" size={32} color={colors.white} />
                        </RectButton>
                    </View>
                </Animated.View>
            )}
        >
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
        </Swipeable>
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
    },
    buttonRemove: {
        width: 120,
        height: 110,
        backgroundColor: colors.red,
        marginTop: 5,
        borderRadius: 20,
        justifyContent: 'center',
        position: 'relative',
        right: 25,
        alignItems: 'center',
        paddingLeft: 15
    }
})