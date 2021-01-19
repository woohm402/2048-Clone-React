import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './containers/Header';
import Game from './containers/Game';
import Setting from './containers/Setting';
import { connect } from 'react-redux';
import './App.css';

const mapStateToProps = state => {
  return {
    theme: state.st.theme
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='body_wrapper' id={this.props.theme}>
          <div className='bodyOf2048'>
            <Route exact path='/'>
              <Header />
              <Game />
            </Route>
            <Route exact path='/settings'>
              <Setting />
            </Route>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(mapStateToProps, null)(App);
