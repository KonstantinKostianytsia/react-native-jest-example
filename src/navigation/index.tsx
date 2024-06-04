import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootNavigatorRoutes} from './routes/rootNavigatorRoutes';
import MenuScreen from 'screens/MainFlow/MenuScreen';

const RootNavigationContainer = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RootNavigatorRoutes.MenuScreen}
          component={MenuScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigationContainer;
