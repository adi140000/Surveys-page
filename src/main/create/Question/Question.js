import React, { Component } from 'react';
import Option from '../Option/Option';

class Question extends Component {
    counter = 0;
    send = false;
    state = {
        options: [

        ]
    }

    pushOption = () => {
        const { options } = this.state;
        const temOptions = [...options, { id: this.counter, content: '' }]
        this.setState({
            options: temOptions,
        });

        this.counter++;
        this.send = true;
    }
    componentDidUpdate = () => {
        if (this.send) {
            const { id } = this.props;
            this.props.addO(id, this.state);
            this.send = false;
        }

    }

    render() {
        const { id, query, options, changeQ } = this.props;
        console.log(options);
        const showOptions = this.state.options.map(({ id, content }) => (<Option key={id} text={content} />))
        return (<div className="reg_part">
            <input className='question' id={id} onChange={changeQ} value={query}></input>
            <button onClick={this.pushOption} className='btn btn_login'>Add Option</button>
            {showOptions}
        </div>);
    }
}

export default Question;