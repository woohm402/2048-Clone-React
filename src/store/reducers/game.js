import * as actionTypes from '../actions/actionTypes';

const initialState = {
    score: 0,
    bestScore: 0,
    dScore: 0,
    map: [
        [0, 2, 0, 0],
        [0, 0, 2, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
};

// get current state and action, return new state
const reducer = (state = initialState, action) => {
    const { map } = state;
    let mapClass = new Map(map);
    let result;
    switch (action.type) {
        case actionTypes.MOVE:
            console.log(action);
            result = mapClass.moveMap(action.dir);
            break;
        case actionTypes.NEW_GAME:
            return initialize(state);
        default:
            return state;
    }
    const { newMap, score } = result;
    if (checkIfChanged(map, newMap)) {
        while (true) {
            const { x, y } = randomPos();
            if (newMap[x][y] === 0) {
                let newNum = (Math.random()>0.8)? 4 : 2;
                newMap[x][y] = newNum;
                break;
            }
        }
    }
    const newScore = state.score + score;
    const newBestScore = (state.bestScore > newScore) ? state.bestScore : newScore;

    return { score: newScore, bestScore: newBestScore, dScore: score, map: newMap };
}

const initialize = (state) => {
    const map = Array.from(Array(4), () => Array(4).fill(0));
    const { x, y } = randomPos();
    map[x][y] = 2;
    while (true) {
        const { x, y } = randomPos();
        if (map[x][y] !== 2) {
            map[x][y] = 2;
            break;
        }
    }

    return {
        ...state,
        score: 0,
        dScore: 0,
        map: map
    };
}

const checkIfChanged = (map, newMap) => {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (map[i][j] !== newMap[i][j]) return true;
        }
    }
    return false;
}

const randomPos = () => {
    const x = Math.floor(Math.random() * 4);
    const y = Math.floor(Math.random() * 4);
    return { x, y };
}

class Map {
    constructor(map) {
        this.map = [
            [map[0][0], map[0][1], map[0][2], map[0][3]],
            [map[1][0], map[1][1], map[1][2], map[1][3]],
            [map[2][0], map[2][1], map[2][2], map[2][3]],
            [map[3][0], map[3][1], map[3][2], map[3][3]]
        ];
        this.score = 0;
    }
    moveMap = (mode) => {
        switch (mode) {
            case 'left':
                for (let i = 0; i < 4; i++) this.setRow(i, this.moveLine(this.getRow(i)));
                return { newMap: this.map, score: this.score };
            case 'right':
                for (let i = 0; i < 4; i++) this.setRow(i, this.moveLine(this.getRow(i).reverse()).reverse());
                return { newMap: this.map, score: this.score };
            case 'up':
                for (let i = 0; i < 4; i++) this.setCol(i, this.moveLine(this.getCol(i)));
                return { newMap: this.map, score: this.score };
            case 'down':
                for (let i = 0; i < 4; i++) this.setCol(i, this.moveLine(this.getCol(i).reverse()).reverse());
                return { newMap: this.map, score: this.score };
        }
    }
    moveLine = (list) => {
        for (let i = 2; i >= 0; i--) {
            if (list[i] === 0) {
                for (let j = i; j < 4; j++) {
                    list[j] = list[j + 1];
                    if (!list[j]) list[j] = 0;
                }
            }
        }

        if (list[0] === list[1]) {
            if (list[2] === list[3]) {
                list[0] = list[0] * 2;
                this.score += list[0];
                list[1] = list[2] * 2;
                this.score += list[1];
                list[2] = list[3] = 0;
            }
            else {
                list[0] = list[0] * 2;
                this.score += list[0];
                list[1] = list[2];
                list[2] = list[3];
                list[3] = 0;
            }
        }
        else if (list[1] === list[2]) {
            list[1] = list[1] * 2;
            this.score += list[1];
            list[2] = list[3];
            list[3] = 0;
        }
        else if (list[2] === list[3]) {
            list[2] = list[3] * 2;
            this.score += list[2];
            list[3] = 0;
        }
        return list;
    }
    getRow = (index) => {
        return this.map[index];
    }
    getCol = (index) => {
        let ret = [];
        for (let i = 0; i < 4; i++) {
            ret.push(this.map[i][index]);
        }
        return ret;
    }
    setRow = (index, list) => {
        this.map[index] = list;
    }
    setCol = (index, list) => {
        for (let i = 0; i < 4; i++) {
            this.map[i][index] = list[i];
        }
    }
}

export default reducer;