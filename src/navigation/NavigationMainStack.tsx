import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainPage} from '../pages/Main';
import {ThemeProvider, createTheme} from '@rneui/themed';
import {Details} from '../pages/Details';
import {SwitchTheme} from '../components/SwitchTheme';
import {MainStackParamLis} from '../types/types';

const Stack = createNativeStackNavigator<MainStackParamLis>();

export const NavigationMainStack = () => {
  const themeDefault = createTheme({
    lightColors: {
      primary: '#7969E6',
      background: '#BFC5FF',
    },
    darkColors: {
      primary: '#232A5E',
      background: '#160F29',
    },
    mode: 'light',
  });

  return (
    <NavigationContainer>
      <ThemeProvider theme={themeDefault}>
        <SwitchTheme />
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name={'Main'}
            component={MainPage}
          />
          <Stack.Screen
            options={{
              title: '',
              headerShadowVisible: false,
            }}
            name={'Details'}
            component={Details}
          />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};
