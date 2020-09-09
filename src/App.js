import React from 'react';
import ListItem from './ListItem';

function App() {
const list = [
  {make: 'Toyota', model: 'Camry', price: 20000},
  {make: 'BMW', model: '7', price: 58000},
  {make: 'VAZ', model: '4', price: 15000}];


  return (
    <div>
      {list.map(el => <ListItem el={el}/>)}
    </div>
  );
}

export default App;
