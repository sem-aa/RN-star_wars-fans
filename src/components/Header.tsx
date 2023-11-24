import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text, Button} from '@rneui/themed';
import {useGlobalState} from '../state/state';

export function Header(): JSX.Element {
  const [selctedHeroes, setSelectedHeroes] = useGlobalState('selectedHeroes');

  const countFansByGender = (gender: string): number => {
    if (gender === 'n/a') {
      return selctedHeroes.filter(
        hero => hero.gender !== 'male' && hero.gender !== 'female',
      ).length;
    }
    return selctedHeroes.filter(hero => hero.gender === gender).length;
  };

  const renderFanCard = (gender: string, label: string): JSX.Element => {
    return (
      <Card containerStyle={styles.card}>
        <Card.Title>{countFansByGender(gender)}</Card.Title>
        <Text>{label}</Text>
      </Card>
    );
  };

  return (
    <>
      <Text h3={true}>Fans</Text>
      <View style={styles.container}>
        {renderFanCard('female', 'Female Fans')}
        {renderFanCard('male', 'Male Fans')}
        {renderFanCard('n/a', 'Others')}
      </View>
      <Button
        title={'Clear Fans'}
        disabled={selctedHeroes.length === 0}
        buttonStyle={styles.btnStyle}
        titleStyle={styles.btnTitle}
        containerStyle={styles.btnContainer}
        onPress={() => setSelectedHeroes([])}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 16,
  },
  btnStyle: {
    borderRadius: 16,
  },
  btnTitle: {
    fontWeight: 'bold',
  },
  btnContainer: {
    width: 200,
    marginTop: 16,
    alignSelf: 'center',
  },
});
