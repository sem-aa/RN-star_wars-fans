import React, {useState} from 'react';
import {Input} from '@rneui/base';
import {searchPeople} from '../service/swApi';
import {useGlobalState} from '../state/state';

export function Search(): JSX.Element {
  const [, setResponse] = useGlobalState('response');
  const [, setLoading] = useGlobalState('loading');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    const results = await searchPeople(searchTerm);
    setResponse(results);
    setLoading(false);
  };

  return (
    <Input
      placeholder="Enter name"
      value={searchTerm}
      onChangeText={text => setSearchTerm(text)}
      onSubmitEditing={handleSearch}
    />
  );
}
