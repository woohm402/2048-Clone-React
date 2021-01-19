import React, { Component } from 'react';
import HeaderView from '../components/HeaderView';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes';

const mapDispatchToProps = dispatch => {
    return {
        onNewGame: () => dispatch({ type: actionTypes.NEW_GAME })
    };
};

const mapStateToProps = state => {
    return {
        score: state.gm.score,
        bestScore: state.gm.bestScore,
        theme: state.st.theme
    };
}

class Header extends Component {
    handleNewGame = () => {
        this.props.onNewGame();
    }

    render() {
        const { score, bestScore, theme } = this.props;
        return (
            <div>
                <HeaderView 
                    score = {score} 
                    bestScore = {bestScore}
                    theme = {theme}
                    handleNewGame = {this.handleNewGame}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);