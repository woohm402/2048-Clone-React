import React from 'react';
import GameLineView from './GameLineView';

const GameView = (props) => {
    const { map, theme } = props;
    return (
        <div className = 'gameView' id = {theme}>
            <GameLineView data = {map[0]} theme = {theme}/>
            <GameLineView data = {map[1]} theme = {theme}/>
            <GameLineView data = {map[2]} theme = {theme}/>
            <GameLineView data = {map[3]} theme = {theme}/>
        </div>
    );
}

export default GameView;