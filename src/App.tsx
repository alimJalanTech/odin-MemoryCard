import React from "react";
import { useState } from "react";
import UserHeader from "./components/header";
import CharacterCard from "./components/characters";
import { ContentStyle } from "./styled/style";
import { characters } from "./data";

type Character = {
  id?: number;
  image: string;
  name: string;
};

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  function shuffle(array: Character[]): void | Character[] {
    let currentIndex = array.length;
    let temporaryValue: Character;
    let randomIndex: number;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
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
      setScore((s) => s + 1);
      if (score + 1 > bestScore) {
        setBestScore((s) => s + 1);
      }
    }
    shuffle(characters);
  };

  return (
    <>
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
    </>
  );
}

export default App;
