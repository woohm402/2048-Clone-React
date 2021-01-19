import React from 'react';
import GameBlockView from './GameBlockView';
import './GameView.css';

const GameLineView = (props) => {
    const { data, theme } = props;
    return (
        <div className = "gameLine">
            <GameBlockView item={data[0]} theme = {theme}/>
            <GameBlockView item={data[1]} theme = {theme}/>
            <GameBlockView item={data[2]} theme = {theme}/>
            <GameBlockView item={data[3]} theme = {theme}/>
        </div>
    );
}

export default GameLineView;