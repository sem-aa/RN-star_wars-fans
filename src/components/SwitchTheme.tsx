import React from 'react';
import {Switch, Text, useThemeMode, useTheme} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';

export function SwitchTheme(): JSX.Element {
  const {mode, setMode} = useThemeMode();
  const {theme} = useTheme();

  return (
    <View style={{...styles.switch, backgroundColor: theme.colors.background}}>
      <Text>Dark Theme</Text>
      <Switch
        value={mode === 'dark'}
        onValueChange={value => setMode(value ? 'dark' : 'light')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  switch: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
