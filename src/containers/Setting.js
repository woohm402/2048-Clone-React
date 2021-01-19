import React, { Component } from 'react';
import { connect } from 'react-redux';
import SettingView from '../components/SettingView';
import * as actionTypes from '../store/actions/actionTypes';

const mapDispatchToProps = dispatch => {
    return {
        onChangeTheme: (theme) => { dispatch(actionTypes.theme(theme)) }
    };
};

const mapStateToProps = state => {
    return {
        theme: state.st.theme
    }
}

class Setting extends Component {
    handleThemeChange = (e) => {
        this.props.onChangeTheme(e);
    }
    render() {
        return (
            <div>
                <SettingView handleThemeChange={this.handleThemeChange} />
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);