import React from "react";
import "./style.css";
import {
    Card,
  } from "baseui/card";
import { wrap } from "module";

type CharacterCardProps = {
    id: number;
    name: string;
    image: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ id, name, image }) => {
    return (
        <>
    <Card
      overrides={{
        Root: {
          style: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            width: "800px",
            minHeight: "250px",
            borderRadius: "10px",
            margin: "40px",
            textAlign:"center",
            backgroundColor: "gray",
            border: "2px solid",
          },
        },
      }}
    >
        <p>{id}</p>
        <p>{name}</p>
        <img src={image} alt="character" className="char-image"/>
        </Card>
        </>
    );
};

export default CharacterCard;
