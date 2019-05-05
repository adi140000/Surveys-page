import React from 'react';

const Option = (props) => {
    const { id, text, change } = props;
    return (<input value={text} onChange={(e) => { change(e, id) }} className="option">
    </input>);
}

export default Option;