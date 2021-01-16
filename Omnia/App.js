import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/Home.js";
import Job from "./src/screens/Job.js";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Job" component={Job} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
