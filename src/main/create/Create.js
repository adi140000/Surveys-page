import React, { Component } from 'react';
import Question from './Question/Question';


class Create extends Component {
    counter = 0;

    state = {
        questions: [],

    }

    addQuestion = () => {
        const questions = this.state.questions;
        const counter = this.counter;
        this.counter++;
        questions.push({
            id: counter,
            query: '',
            options: []
        })
        this.setState({
            questions
        })

    }

    addOption = (idN, tempState) => {

        const questions = this.state.questions.map(({ id, query, options }) => {
            if (id === idN) options = tempState.options;
            return Object.assign({}, { id, query, options })
        })
        this.setState({
            questions
        })

        console.log(tempState)
    }

    changeQuery = (e) => {
        const idN = parseInt(e.target.id);
        const questions = this.state.questions.map(({ id, query, options }) => {

            if (idN === id) {
                return Object.assign({}, {
                    id,
                    query: e.target.value,
                    options,
                })
            }
            return Object.assign({}, {
                id,
                query,
                options,
            })
        })
        this.setState({
            questions
        })
    }

    render() {
        const { questions } = this.state;
        const showQuestions = questions.map(({ id, query, options }) => {

            return <Question key={id} id={id} query={query} options={options} changeQ={this.changeQuery} addO={this.addOption} />
        })
        return (<section>
            <div className="fill_data">
                {showQuestions}
                <button onClick={this.addQuestion} className='btn btn_register'>Add Question</button>
            </div>
        </section>);
    }
}

export default Create;