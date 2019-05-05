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


    changeOption = (e, idN) => {
        const options = this.state.options.map(({ id, content }) => {
            console.log(e.target.value, id, idN)
            if (id === idN) {
                return Object.assign({}, {
                    id,
                    content: e.target.value
                })
            }
            return Object.assign({}, {
                id,
                content
            })
        })
        this.setState({
            options
        })
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
        const { id, query, changeQ } = this.props;
        const showOptions = this.state.options.map(({ id, content }) => (<Option key={id} id={id} change={this.changeOption} text={content} />))
        return (<div className="reg_part">
            <input className='question' id={id} onChange={changeQ} value={query}></input>
            <input type='button' value='Add Option' onClick={this.pushOption} className='btn btn_login'></input>
            {showOptions}
        </div>);
    }
}

export default Question;