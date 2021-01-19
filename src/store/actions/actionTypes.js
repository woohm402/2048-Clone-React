

export const NEW_GAME = 'NEW_GAME';

export const MOVE = 'MOVE';
export const move = dir => ({type: MOVE, dir});

export const THEME = 'THEME';
export const theme = theme => ({ type: THEME, theme});