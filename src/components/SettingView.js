import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SettingView.css';

class SettingView extends Component {
    handleThemeChange1 = () => { this.props.handleThemeChange('theme1') };
    handleThemeChange2 = () => { this.props.handleThemeChange('theme2') };
    handleThemeChange3 = () => { this.props.handleThemeChange('theme3') };

    render() {
        return (
            <div>
                <div>
                    <Link to='/'>
                        <img className='goBack' src={require('../assets/setting_goBack.png')}/>
                    </Link>
                </div>
                <div>
                    <div>
                        <button className='themeButton' id='theme1' onClick={this.handleThemeChange1}>theme1</button>
                    </div>
                    <div>
                        <button className='themeButton' id='theme2' onClick={this.handleThemeChange2}>theme2</button>
                    </div>
                    <div>
                        <button className='themeButton' id='theme3' onClick={this.handleThemeChange3}>theme3</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default SettingView;