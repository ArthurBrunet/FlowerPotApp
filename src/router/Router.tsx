import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTemplates from '../templates/HomeTemplates';
import CreatePotTemplate from '../templates/CreatePotTemplate';
import {TERTIARY_COLOR} from '../assets/colors';
import DetailsPotTemplate from "../templates/DetailsPotTemplate";
import CreateCapteurTemplate from "../templates/CreateCapteurTemplate";

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerTransparent: true,
          headerTitleStyle: {
            color: TERTIARY_COLOR,
          },
          headerTintColor: TERTIARY_COLOR,
          headerBackButtonMenuEnabled: false,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeTemplates}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Create"
          component={CreatePotTemplate}
          options={{
            headerTitle: 'Créer un pot',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsPotTemplate}
          options={{
            headerTitle: 'Détails du pot',
          }}
        />
        <Stack.Screen
          name="CreateCapteur"
          component={CreateCapteurTemplate}
          options={{
            headerTitle: 'Créer un capteur',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
