import React from 'react';

const GameBlockView = (props) => {
    const { item, theme } = props;
    const className = `gb${item} gameBlock`;
    const id = `gb${item}${theme}`;
    switch(item) {
        case 0:
            return (<div className = {className} id={id}></div>);
        case 2:
            return (<div className = {className} id={id}>{item}</div>);
        case 4:
            return (<div className = {className} id={id}>{item}</div>);
        case 8:
            return (<div className = {className} id={id}>{item}</div>);
        case 16:
            return (<div className = {className} id={id}>{item}</div>);
        case 32:
            return (<div className = {className} id={id}>{item}</div>);
        case 64:
            return (<div className = {className} id={id}>{item}</div>);
        case 128:
            return (<div className = {className} id={id}>{item}</div>);
        case 256:
            return (<div className = {className} id={id}>{item}</div>);
        case 512:
            return (<div className = {className} id={id}>{item}</div>);
        case 1024:
            return (<div className = {className} id={id}>{item}</div>);
        case 2048:
            return (<div className = {className} id={id}>{item}</div>);
        default:
            return (<div className = {className}>{item}</div>);
    }
}

export default GameBlockView;