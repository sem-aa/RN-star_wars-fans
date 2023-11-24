import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Dialog} from '@rneui/themed';

export function Loading(): JSX.Element {
  return (
    <View style={styles.container}>
      <Dialog.Loading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
