import React, {useState} from 'react';

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}

const App = () => {
  const [people, setPeople] = useState<IState['people']>([]);

  return (
    <div className='App'>
      <h1>People Invited to my Party</h1>
    </div>
  );
};

export default App;