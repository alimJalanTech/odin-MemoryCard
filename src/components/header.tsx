import React from "react";
import { HeadStyle } from "../styled/style";
import "./style.css";

type ScoreProps = {
  score: number;
  bestScore: number;
};

const UserHeader: React.FC<ScoreProps> = ({ score, bestScore }) => {
  return (
    <>
      <HeadStyle>
        <div className="title">Wednesday Memory Game</div>
        <div className="score">
          Score
          <div className="best-score">
            Best Score is {bestScore}
            <br></br>
            Score is {score}
          </div>
        </div>
      </HeadStyle>
    </>
  );
};

export default UserHeader;
