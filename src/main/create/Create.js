import React, { Component } from 'react';
import Question from './Question/Question';


class Create extends Component {
    counter = 0;

    state = {
        questions: [],
    }

    addQuestion = (e) => {
        e.preventDefault();
        const questions = this.state.questions;
        const counter = this.counter;
        this.counter++;
        questions.push({
            id: counter,
            query: '',
            multiply: true,
            options: []
        })
        this.setState({
            questions
        })

    }

   
    addOption = (idN, tempState) => {

        const questions = this.state.questions.map(({ id, query, options,multiply }) => {
            if (id === idN) options = tempState.options;
            return Object.assign({}, { id, query, options,multiply })
        })
        this.setState({
            questions
        })


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

    changeMultiply = idE => {
        idE = parseInt(idE);
        const { questions } = this.state;
        const newQuestions = questions.map((data) => {
            const { id, multiply } = data;
            if (idE === id) {
                data.multiply = !multiply;
            }
            return data
        })

        this.setState({
            questions:newQuestions
        })
    }

    


    render() {
        
        const { questions } = this.state;
        const showQuestions = questions.map(({ id, query, options,multiply }) => {

            return <Question key={id} id={id} query={query} multiply={multiply} options={options} changeQ={this.changeQuery} changeMultiply={this.changeMultiply} addO={this.addOption} />
        })
        return (<section className='fill_section' >
            <form onSubmit={() => { }} className="survey fill_data" >
                {showQuestions}
                <input type='button' onClick={this.addQuestion} value='Add Question' className='btn btn_register'></input>
                <button type='submit' className='btn btn_register'>Send</button>
            </form>
        </section>);
    }
}

export default Create;