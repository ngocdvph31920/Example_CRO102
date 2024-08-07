import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import MeditationScreen from './src/screens/MeditationScreen';
import StepsCounter from './src/screens/StepsCounter';
import BMICalculator from './src/screens/BMICalculator'; 
import GratitudeManagementScreen from './src/screens/GratitudeManagementScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GratitudeManagement"
          component={GratitudeManagementScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Meditation"
          component={MeditationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StepsCounter"
          component={StepsCounter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BMICalculator"
          component={BMICalculator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
