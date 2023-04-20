import React from "react";
import "./style.css";
import { Card } from "baseui/card";
import { cardStyles } from "../styled/style";

type CharacterCardProps = {
  id: number;
  image: string;
  name: string;
  onClick?: () => void;
};

const CharacterCard: React.FC<CharacterCardProps> = ({
  id,
  name,
  image,
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <Card
        overrides={{
          Root: {
            style: cardStyles,
          },
        }}
      >
        <p>{name}</p>
        <img src={image} alt="character" className="char-image" />
      </Card>
    </div>
  );
};

export default CharacterCard;
