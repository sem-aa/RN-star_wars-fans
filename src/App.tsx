import React, {useEffect} from 'react';
import {getAllHeroes} from './service/swApi';
import {useGlobalState} from './state/state';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationMainStack} from './navigation/NavigationMainStack';

function App(): JSX.Element {
  const [, setResponse] = useGlobalState('response');
  const [, setLoading] = useGlobalState('loading');

  useEffect(() => {
    setLoading(true);
    getAllHeroes()
      .then(data => {
        console.log('API response:', data);
        setResponse(data);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [setResponse, setLoading]);

  return (
    <SafeAreaProvider>
      <NavigationMainStack />
    </SafeAreaProvider>
  );
}

export default App;
