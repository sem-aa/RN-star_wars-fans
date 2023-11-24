import React from 'react';
import {Pagination} from '../components/Pagination';
import {ListHeroes} from '../components/ListHeroes';
import {Header} from '../components/Header';
import {Search} from '../components/Search';
import {Container} from '../components/Container';

export function MainPage(): JSX.Element {
  return (
    <Container>
      <Header />
      <Search />
      <ListHeroes />
      <Pagination />
    </Container>
  );
}
