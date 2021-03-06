import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/Home.js";
import Job from "./src/screens/Job.js";
import LoginScreen from "./src/screens//LoginScreen/LoginScreen.js";
import RegistrationScreen from "./src/screens/RegistrationScreen/RegistrationScreen.js";
import SettingsPage from "./src/screens/SettingsPage.js";
import 'react-native-gesture-handler';
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }






const Tab = createBottomTabNavigator();
const Stack =createStackNavigator();

 function Main() {

  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Job" component={Job} />
        <Tab.Screen name="SettingsPage" component={SettingsPage} />
      </Tab.Navigator>
  );

  };

 export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };