import React from 'react';

const Option = (props) => {
    const { text } = props;
    return (<input value={text} onChange={() => { }} className="option">
    </input>);
}

export default Option;