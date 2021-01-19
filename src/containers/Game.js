import React, { Component } from 'react';
import GameView from '../components/GameView';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes';

const mapDispatchToProps = dispatch => {
    return {
        onKeyPress: (dir) => dispatch(actionTypes.move(dir))
    };
};

const mapStateToProps = state => {
    return {
        map: state.gm.map,
        theme: state.st.theme
    };
};

class Game extends Component {
    postGameHandler = (key) => {
        switch(key) {
            case 'w': case 'W':
                this.props.onKeyPress('up');
                break;
            case 'a': case 'A':
                this.props.onKeyPress('left');
                break;
            case 'd': case 'D':
                this.props.onKeyPress('right');
                break;
            case 's': case 'S':
                this.props.onKeyPress('down');
                break;
        }
    }
    handleKeyPress = (event) => {
        this.postGameHandler(event.key);
    }

    render() {
        const { map, theme } = this.props;
        return (
            <div tabIndex={0} onKeyPress={this.handleKeyPress}>
                <GameView map={map} theme = {theme}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);