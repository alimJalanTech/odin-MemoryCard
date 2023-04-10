import React from 'react';
import UserHeader from './components/header';
import CharacterCard from './components/characters';
import { ContentStyle } from "./styled/style";


import Wednesday from "./components/img/wednesday.jpg";
import Erid from "./components/img/erid.jpg"
import Thing from "./components/img/thing.jpg"
import Tyler from "./components/img/tyler.jpg"
import Xavier from "./components/img/xavier.jpg"
import Larissa from "./components/img/larissa.jpg"



type Character = {
  id?: number;
  name: string;
  image: string;
}

const characters: Character[] = [
  {
    id: 1,
    name: 'Wednesday',
    image: Wednesday
  },
  {
    id: 2,
    name: 'Erid',
    image: Erid
  },
  {
    id: 3,
    name: 'Tyler',
    image: Tyler
  },
  {
    id: 4,
    name: 'Thing',
    image: Thing
  },
  {
    id: 5,
    name: 'Xavier',
    image: Xavier
  },
  {
    id: 6,
    name: 'Larissa',
    image: Larissa
  },
];

function App() {
  return (
    <div>
      <UserHeader/>
      
      <ContentStyle>
      {characters.map((character) => (
        <CharacterCard 
          key={character.id ?? character.name} // Use name as key if id is undefined
          id={character.id ?? -1} // Provide default value of -1 if id is undefined
          name={character.name}
          image={character.image}
        />
      ))}
      </ContentStyle>
    </div>
  );
}

export default App;
