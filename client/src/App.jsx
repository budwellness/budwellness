import React from 'react';
import Header from './components/Header/Header';

import { useGetAllProductsQuery } from './store/serverResponse/fetchLocalJson';

import './App.css';

function App() {
  const { data, error } = useGetAllProductsQuery();

  // eslint-disable-next-line no-console
  console.log('DATA: ', data);
  // eslint-disable-next-line no-console
  console.log('error: ', error);

  return (
    <Header />
  );
}

export default App;
