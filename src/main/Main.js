import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Register from "./register/Register"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<main>
            <Switch>
                <Route path="/" exact render={() => (<div>strona glowna</div>)} />
                <Route path="/suv/" render={() => (<div>suv</div>)} />
                <Route path="/create/" render={() => (<div>create</div>)} />
                <Route path="/register/" component={Register} />
            </Switch>

        </main>);
    }
}

export default Main;