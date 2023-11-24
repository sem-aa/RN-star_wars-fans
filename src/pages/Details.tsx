import React, {useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {useTheme, ListItem, Text} from '@rneui/themed';
import {PropsDetails} from '../types/types';

export function Details({route, navigation}: PropsDetails): JSX.Element {
  const {theme} = useTheme();
  const {hero} = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: theme.colors.background,
      },
      headerTintColor: theme.colors.primary,
    });
  }, [navigation, theme]);

  return (
    <ScrollView>
      <Text
        h3={true}
        h3Style={{...styles.title, backgroundColor: theme.colors.background}}>
        All details
      </Text>
      <ListItem key={hero.url}>
        <ListItem.Content>
          <ListItem.Title style={styles.titleHero}>{hero.name}</ListItem.Title>
          {Object.entries(hero).map(([key, value], i) => {
            return (
              <View key={i} style={styles.containerSub}>
                <ListItem.Subtitle style={styles.subTitleKey}>
                  {key}:
                </ListItem.Subtitle>
                <ListItem.Subtitle style={styles.subTitleVal}>
                  {value}
                </ListItem.Subtitle>
              </View>
            );
          })}
        </ListItem.Content>
      </ListItem>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
  },
  titleHero: {
    fontSize: 24,
    fontWeight: '700',
  },
  containerSub: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  subTitleKey: {
    flex: 0.3,
  },
  subTitleVal: {
    flex: 0.7,
  },
});
