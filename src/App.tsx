import React from "react";
import { useState } from "react";
import UserHeader from "./components/header";
import CharacterCard from "./components/characters";
import { ContentStyle } from "./styled/style";

import Wednesday from "./components/img/wednesday.jpg";
import Erid from "./components/img/erid.jpg";
import Thing from "./components/img/thing.jpg";
import Tyler from "./components/img/tyler.jpg";
import Xavier from "./components/img/xavier.jpg";
import Larissa from "./components/img/larissa.jpg";

type Character = {
  id?: number;
  name: string;
  image: string;
};

const characters: Character[] = [
  {
    id: 1,
    name: "Wednesday",
    image: Wednesday,
  },
  {
    id: 2,
    name: "Erid",
    image: Erid,
  },
  {
    id: 3,
    name: "Tyler",
    image: Tyler,
  },
  {
    id: 4,
    name: "Thing",
    image: Thing,
  },
  {
    id: 5,
    name: "Xavier",
    image: Xavier,
  },
  {
    id: 6,
    name: "Larissa",
    image: Larissa,
  },
];

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState<number[]>([]);

  function shuffle(array: Character[]) {
    let currentIndex = array.length;
    let temporaryValue: Character;
    let randomIndex: number;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const handleClick = (id: number) => {
    if (clicked.includes(id)) {
      setScore(0);
      setClicked([]);
    } else {
      const newClicked = [...clicked, id];
      setClicked(newClicked);
      setScore(score + 1);
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
    }
    shuffle(characters);
  };

  return (
    <div>
      <UserHeader score={score} bestScore={bestScore} />
      <ContentStyle>
        {characters.map((character) => (
          <CharacterCard
            key={character.id ?? character.name}
            id={character.id ?? -1}
            name={character.name}
            image={character.image}
            onClick={() => handleClick(character.id ?? -1)}
          />
        ))}
      </ContentStyle>
    </div>
  );
}

export default App;
