import React, {useState} from 'react';
import './App.css';

import List from "./components/List";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}

const App = () => {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Lebron James',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/LeBron_James_crop.jpg',
      age: 36,
      note: 'Allegeric to staying on the same team',
    }
  ]);

  return (
    <div className='App'>
      <h1>People Invited to my Party</h1>
      <List people={people}/>
    </div>
  );
};

export default App;