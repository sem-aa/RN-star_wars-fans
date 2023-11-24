import {createGlobalState} from 'react-hooks-global-state';
import {IState} from '../types/types';

const initialState: IState = {
  response: null,
  selectedHeroes: [],
  loading: false,
};
export const {useGlobalState} = createGlobalState(initialState);
