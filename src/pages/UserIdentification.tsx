import content from '*.png';
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';

export function UserIdentification() {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    return (
        <KeyboardAvoidingView style={style.container} >
            < SafeAreaView style={style.container}>
                < View style={style.content}>
                    < View style={style.form}>
                        < Text style={style.emoji}>
                            :)
                    </Text>
                        < Text style={style.title}>
                            Como podemos{'\n'}
                        chamar você?
                    </Text>
                        < TextInput
                            style={[
                                style.input,
                                (isFocused || isFilled) && { borderColor: colors.green }
                            ]}
                            placeholder="Digite um nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                        < View style={style.footer}>
                            < Button />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
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
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44,
        color: colors.green
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20

    }
})