import React from 'react';
import './HeaderView.css';
import { Link } from 'react-router-dom';

const HeaderView = (props) => {
    const { score, bestScore, theme, handleNewGame } = props;
    return (
        <div>
            <Link to = '/settings'>
                <img className='setting_icon' src={require('../assets/setting_icon.png')}/>
            </Link>
            <div className = 'headerLine' id = 'hl_top'>
                <h1 className = 'title' id = {theme}>2048</h1>
                <div className = 'scores'>
                    <div className = 'scoreBox' id = {theme}>
                        <p className = 'sb_text'>SCORE</p>
                        <p className = 'sb_score'>{score}</p>
                    </div>
                    <div className = 'scoreBox' id = {theme}>
                        <p className = 'sb_text'>BEST</p>
                        <p className = 'sb_score'>{bestScore}</p>
                    </div>
                </div>
            </div>
            <div className = 'headerLine' id = 'hl_bottom'>
                <p className = 'desc'>Join the numbers and get to the 2048 tile!</p>
                <button className = 'ngButton' id = {theme} onClick = {handleNewGame}>New Game</button>
            </div>
        </div>
    )
};

export default HeaderView;