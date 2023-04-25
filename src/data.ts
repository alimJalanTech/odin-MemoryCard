import Wednesday from "./img/wednesday.jpg";
import Erid from "./img/erid.jpg";
import Thing from "./img/thing.jpg";
import Tyler from "./img/tyler.jpg";
import Xavier from "./img/xavier.jpg";
import Larissa from "./img/larissa.jpg";

type Character = {
  id?: number;
  image: string;
  name: string;
};

export const characters: Character[] = [
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
