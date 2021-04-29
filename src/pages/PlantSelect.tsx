import React, { useEffect, useState } from 'react';
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
import api from '../services/api';
import { PlantCardPrimary } from '../components/PlantCardPrimary';

interface EnvironmentProps {
    key: string;
    title: string;
}

interface PlantProps {
    id: string,
    name: string,
    about: string,
    water_tips: string,
    photo: string,
    environments: [string],
    frequency: {
        times: number,
        repeat_every: string
    }
}

export function PlantSelect() {
    const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [envrionmentSelected, setEnvironmentSelected] = useState('all');
    const [filteredPlants, setfilteredPlants] = useState<PlantProps[]>([]);


    useEffect(() => {
        async function fetchEnvironment() {
            const { data } = await
                api.get('plants_environments?_sort=title&_order=asc');
            setEnvironments([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ]);
        }
        fetchEnvironment();
    }, [])

    useEffect(() => {
        async function fetchPlants() {
            const { data } = await api.get('plants?_sort=name&_order=asc');
            setPlants(data);
        }
        fetchPlants();
    }, [])

    function handleEnvironmentSelected(key: string) {
        setEnvironmentSelected(key);
        if (key == 'all') {
            return setfilteredPlants(plants);
        }
        const filtered = plants.filter(plant =>
            plant.environments.includes(key)
        );
        setfilteredPlants(filtered);
    }

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
                    data={environments}
                    renderItem={({ item }) => (
                        < EnvironmentButton
                            title={item.title}
                            active={item.key === envrionmentSelected}
                            onPress={() => handleEnvironmentSelected(item.key)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.environmentList}
                />
            </View>
            < View style={styles.plants}>
                < FlatList
                    data={filteredPlants}
                    renderItem={({ item }) => (
                        < PlantCardPrimary data={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
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
    },
    plants: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    }
})