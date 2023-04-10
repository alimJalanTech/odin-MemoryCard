import React from 'react';
import {HeadStyle} from '../styled/style';
import "./style.css";

const UserHeader: React.FC = () => {
    return (
        <>
        <HeadStyle>
            <div className="title">Wednesday Memory Game</div>
            <div className="score">Score</div>
        </HeadStyle>
        </>
    );
};

export default UserHeader;
