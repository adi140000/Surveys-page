import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Register from "./register/Register";
import Login from "./login/Login";
import Create from "./create/Create";
import WithOutLogin from "./withOutLogin/WithOutLogin"

class Main extends Component {

    render() {
        const { decision } = this.props;
        return (<main>
            <Switch>
                <Route path="/" exact render={() => (<div>main site</div>)} />
                <Route path="/suv/" render={() => (<div>suv</div>)} />
                <Route path="/create/" component={decision ? Create : WithOutLogin} />:
                <Route path="/register/" component={Register} />
                <Route path="/login/" component={Login} />
            </Switch>

        </main>);
    }
}

export default Main;