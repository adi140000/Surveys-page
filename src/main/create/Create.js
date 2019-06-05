import React, { Component } from 'react';
import Question from './Question/Question';


class Create extends Component {
    counter = 0;

    state = {
        id: null,
        name: '',
        questions: [],
    }

    componentDidMount = () => {
        const { id } = this.props;
        this.setState({
            id
        })
    }
    handleName = (e) => {
        const { value } = e.target;
        this.setState({
            name: value
        })
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

        const questions = this.state.questions.map(({ id, query, options, multiply }) => {
            if (id === idN) options = tempState.options;
            return Object.assign({}, { id, query, options, multiply })
        })
        this.setState({
            questions
        })


    }

    changeQuery = (e) => {
        const idN = parseInt(e.target.id);
        const questions = this.state.questions.map(({ id, query, options, multiply }) => {

            if (idN === id) {
                return Object.assign({}, {
                    multiply,
                    id,
                    query: e.target.value,
                    options,
                })
            }
            return Object.assign({}, {
                multiply,
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
            questions: newQuestions
        })
    }

    sendData = (e) => {        
        e.preventDefault();        
        fetch(`http://localhost:3500/create`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',                
            },
        })



    }


    render() {

        const { questions, name } = this.state;
        const showQuestions = questions.map(({ id, query, options, multiply }) => {

            return <Question key={id} id={id} query={query} multiply={multiply} options={options} changeQ={this.changeQuery} changeMultiply={this.changeMultiply} addO={this.addOption} />
        })
        return (<section className='fill_section' >
            <form onSubmit={this.sendData} className="survey fill_data" >
                <div className="name_div">
                    <h1>Title Survey :</h1>
                    <input className='nameSurvey' value={name} onChange={this.handleName}></input>
                </div>
                {showQuestions}
                <input type='button' onClick={this.addQuestion} value='Add Question' className=' btn btn_register'></input>
                <input type='submit' className='btn btn_register' value='Send' />
            </form>
        </section>);
    }
}

export default Create;