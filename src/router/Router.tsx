import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTemplates from '../templates/HomeTemplates';
import CreatePotTemplate from '../templates/CreatePotTemplate';
import {BACKGROUND_COLOR, TERTIARY_COLOR} from '../assets/colors';
import DetailsPotTemplate from '../templates/DetailsPotTemplate';
import CreateCapteurTemplate from '../templates/CreateCapteurTemplate';
import DetailsCapteurTemplate from '../templates/DetailsCapteurTemplate';
import {StatusBar} from 'react-native';
import ButtonDeletePot from '../components/ButtonDeletePot';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={BACKGROUND_COLOR} />
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          animation: 'slide_from_right',
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
          options={({route, navigation}) => ({
            headerTitle: 'Détails du pot',
            headerRight: () => {
              return <ButtonDeletePot id={route.params?.pot._id} navigation={navigation} />;
            },
          })}
        />
        <Stack.Screen
          name="CreateCapteur"
          component={CreateCapteurTemplate}
          options={{
            headerTitle: 'Créer un capteur',
          }}
        />
        <Stack.Screen
          name="DetailsCapteur"
          component={DetailsCapteurTemplate}
          options={{
            headerTitle: 'Détails du capteur',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
