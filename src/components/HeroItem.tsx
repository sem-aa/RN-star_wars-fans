/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {ListItem, Icon} from '@rneui/themed';
import {Hero} from '../types/types';
import {useNavigation} from '@react-navigation/native';
import {getItems} from '../service/swApi';

export function HeroItem({
  hero,
  onPress,
  isChecked,
}: {
  hero: Hero;
  onPress: () => void;
  isChecked: boolean;
}): JSX.Element {
  const [planet, setPlanet] = useState('');
  const [species, setSpecies] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    getNameItem(hero.homeworld)
      .then(data => setPlanet(data))
      .catch(error => console.log('error from get name item', error));

    findSpecies(hero.species);
  }, [hero]);

  const findSpecies = async (spec: string | string[]) => {
    try {
      if (typeof spec === 'string') {
        setSpecies(spec);
      } else if (Array.isArray(spec) && spec.length > 0) {
        const speciesName = await getNameItem(spec[0]);
        setSpecies(speciesName);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getNameItem = async (url: string) => {
    const {name} = await getItems(url);
    return name;
  };

  const navToDetails = (hero: Hero) => {
    navigation.navigate('Details', {hero});
  };

  return (
    <ListItem key={hero.url}>
      <ListItem.CheckBox
        checked={isChecked}
        onPress={onPress}
        checkedIcon={
          <Icon name="star" type="material" color="blue" size={25} />
        }
        uncheckedIcon={
          <Icon name="star" type="material" color="white" size={25} />
        }
      />
      <ListItem.Content>
        <ListItem.Title>{hero.name}</ListItem.Title>
        <View style={styles.containerSub}>
          <ListItem.Subtitle style={styles.subTitle}>
            {hero.birth_year}
          </ListItem.Subtitle>
          <ListItem.Subtitle style={styles.subTitle}>
            {hero.gender}
          </ListItem.Subtitle>
          <ListItem.Subtitle style={styles.subTitle}>
            {planet}
          </ListItem.Subtitle>
          <ListItem.Subtitle style={styles.subTitle}>
            {species}
          </ListItem.Subtitle>
        </View>
      </ListItem.Content>
      <ListItem.Chevron
        color="white"
        size={24}
        onPress={() => navToDetails(hero)}
      />
    </ListItem>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSub: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  subTitle: {
    marginRight: 8,
  },
});
