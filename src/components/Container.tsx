import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';

export function Container({children}: any): JSX.Element {
  const {theme} = useTheme();
  return (
    <View
      style={{...styles.container, backgroundColor: theme.colors.background}}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
