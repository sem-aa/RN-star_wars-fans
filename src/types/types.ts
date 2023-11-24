import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
export interface IState {
  response: Response | null;
  selectedHeroes: Hero[];
  loading: boolean;
}

export type Response = {
  count: number;
  next: null | string;
  previous: null | string;
  results: Hero[];
};

export type Hero = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: any[];
  gender: Gender;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string | any[];
  starships: any[];
  url: string;
  vehicles: any[];
};

export enum Gender {
  'Male' = 'male',
  'Female' = 'female',
  'N/A' = 'n/a',
}

export type MainStackParamList = {
  Main: undefined;
  Details: {hero: Hero};
};

export type PropsDetails = NativeStackScreenProps<
  MainStackParamList,
  'Details'
>;
export type PropsMain = NativeStackScreenProps<MainStackParamList, 'Main'>;

export type MainStackRouteProps<T extends keyof MainStackParamList> = RouteProp<
  MainStackParamList,
  T
>;
