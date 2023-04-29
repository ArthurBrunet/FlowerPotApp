import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTemplates from '../templates/HomeTemplates';
import CreatePotTemplate from '../templates/CreatePotTemplate';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerTransparent: true,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeTemplates}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Create" component={CreatePotTemplate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
