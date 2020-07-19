import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Camera from './screens/Camera';
import CameraScreen from './screens/Camera';

export default function App() {
  const MainNavigator = createStackNavigator()
  return (
    <NavigationContainer>
      <MainNavigator.Navigator initialRouteName="Home">
        <MainNavigator.Screen 
        name="Home" 
        component={Home}
        options={{
          title:'Home',
          headerStyle: {
            backgroundColor: '#BB2CD9',            
          },
          headerTintColor:'#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
        />
        <MainNavigator.Screen 
        name="Camera" 
        component={CameraScreen}
        options={{
          title:'Camera',
          headerStyle: {
            backgroundColor: '#00CCCD',            
          },
          headerTintColor:'#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}

