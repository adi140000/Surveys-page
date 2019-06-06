import React, { Component } from 'react';

class MySuv extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount = async () => {
        const { id } = this.props;
        const dataJSON = await fetch(`http://localhost:3500/mysuv?id=${id}`);
        const data = await dataJSON.json();
        console.log(data);

    }

    render() {
        return (<section className='fill_section suv' >

        </section>);
    }
}

export default MySuv;