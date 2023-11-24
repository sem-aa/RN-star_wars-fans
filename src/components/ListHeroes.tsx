import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useGlobalState} from '../state/state';
import {Hero} from '../types/types';
import {HeroItem} from './HeroItem';
import {Loading} from './Loading';

export function ListHeroes(): JSX.Element {
  const [response] = useGlobalState('response');
  const [loading] = useGlobalState('loading');
  const [selctedHeroes, setSelectedHeroes] = useGlobalState('selectedHeroes');

  const selectHero = (people: Hero) => {
    const findHero = selctedHeroes.find(hero => hero.url === people.url);
    if (findHero) {
      setSelectedHeroes(prev =>
        prev.filter((hero: Hero) => hero.url !== people.url),
      );
    } else {
      setSelectedHeroes(prev => [...prev, people]);
    }
  };

  const isSelectHero = (hero: Hero) => {
    const exist = selctedHeroes.find(people => people.url === hero.url);
    return exist ? true : false;
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          style={styles.container}
          data={response?.results}
          keyExtractor={(item: Hero) => item.url}
          renderItem={({item}: {item: Hero}) => (
            <HeroItem
              hero={item}
              onPress={() => selectHero(item)}
              isChecked={isSelectHero(item)}
            />
          )}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
