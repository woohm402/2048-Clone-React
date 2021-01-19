import * as actionTypes from '../actions/actionTypes';

const initialState = {
    theme: 'theme1'
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.THEME:
            return {theme: action.theme};
        default:
            return state;
    }
}

export default reducer;