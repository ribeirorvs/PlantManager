import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import { PlantSelect } from '../pages/PlantSelect';
import { MaterialIcons } from '@expo/vector-icons';

const appTab = createBottomTabNavigator();
const AuthRoutes = () => {
    return (
        < appTab.Navigator
            tabBarOptions={{
                activeTintColor: colors.green,
                inactiveTintColor: colors.heading,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: 20,
                    height: 88
                }
            }}
        >
            <appTab.Screen
                name="Nova Planta"
                component={PlantSelect}
                options={{
                    tabBarIcon: (({ size, color }) => {
                        <MaterialIcons
                            name="add-circle-outline"
                            size={size}
                            color={color}
                        />
                    })
                }}
            />
            <appTab.Screen
                name="Minhas Plantas"
                component={MyPlants}
                options={{
                    tabBarIcon: (({ size, color }) => {
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    })
                }}
            />
        </appTab.Navigator>

    )
}

export default AuthRoutes