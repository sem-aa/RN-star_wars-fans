import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '@rneui/themed';
import {Button} from '@rneui/base';
import {useGlobalState} from '../state/state';
import {getItems} from '../service/swApi';

export function Pagination(): JSX.Element {
  const [response, setResponse] = useGlobalState('response');
  const [, setLoading] = useGlobalState('loading');

  const handlePage = async (url: string) => {
    if (url) {
      setLoading(true);
      const data = await getItems(url);
      setResponse(data);
      setLoading(false);
    }
  };

  const itemsPerPage = response?.results?.length || 0;
  const calculateRange = (): string => {
    const match = response?.next?.match(/page=(\d+)/);
    const nextPageNumber = match ? parseInt(match[1], 10) : 1;

    const currentPage = nextPageNumber - 1 || 1;
    const startRange = (currentPage - 1) * itemsPerPage + 1;
    const endRange = Math.min(currentPage * itemsPerPage, response?.count || 0);
    return `${startRange} - ${endRange} of ${response?.count}`;
  };

  return (
    <>
      {response?.results.length ? (
        <View style={styles.pageContainer}>
          <Button
            radius={'sm'}
            type="clear"
            disabled={!response?.previous}
            onPress={() =>
              response?.previous && handlePage(response?.previous)
            }>
            Previous
          </Button>
          <Text>{calculateRange()}</Text>
          <Button
            radius={'sm'}
            type="clear"
            disabled={!response?.next}
            onPress={() => response?.next && handlePage(response?.next)}>
            Next
          </Button>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
});
