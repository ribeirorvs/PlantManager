import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import waterdrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';

export function PlantSave() {
    return (
        <>
            <View style={styles.container}>
                <SvgFromUri
                    uri=""
                    height={150}
                    width={150}
                />

                <Text style={styles.plantName}>
                    Plant Name
            </Text>

                <Text style={styles.plantAbout}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia maxime autem sunt dolor nesciunt iste assumenda
                    repellendus sequi quis inventore similique repudiandae doloremque,
                    reprehenderit velit ad quo fugit maiores accusantium?
            </Text>
            </View>
            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image
                        source={waterdrop}
                        style={styles.tipImage}
                    />
                    <Text style={styles.tipText}></Text>
                </View>
                <Text style={styles.alertLabel}>
                    Escolha o melhor horário para ser lembrado:
                </Text>
                <Button
                    title="Cadastrar planta"
                    onPress={() => { }}
                />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {},
    plantName: {},
    plantAbout: {},
    controller: {},
    tipContainer: {},
    tipImage: {},
    tipText: {},
    alertLabel: {}
})