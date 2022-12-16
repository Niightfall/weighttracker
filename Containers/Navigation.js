import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GraphScreen1 from '../Screens/GraphScreenAll';
import HomeScreen from '../Screens/HomeScreen';
import GraphScreen2 from '../Screens/GraphScreenRecent';
import DataScreen1 from '../Screens/DataOverviewScreen';
import ListView from '../Screens/ListView';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GraphAll"
          component={GraphScreen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GraphRecent"
          component={GraphScreen2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DataScreen"
          component={DataScreen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ListView"
          component={ListView}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigation;
