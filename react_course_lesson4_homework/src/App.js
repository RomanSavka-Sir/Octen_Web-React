import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import "./App.css";
import AllUsers from "./Components/AllUsers/AllUsers";
import AllPosts from "./Components/AllPosts/AllPosts";
import AllComments from "./Components/AllComments/AllComments";


class App extends Component {


    render() {
        return (
            <Router>

            <div>
                <div>
<Link to={"/users"}>users</Link>
                </div>
                <div>
                    <Link to={"/posts"}>posts</Link>
                </div>
                <div>
                    <Link to={"/comments"}>comments</Link>
                </div>

<div className={"app-newone"}>
    <Switch>
        <Route path={"/users"}>
            <AllUsers/>
        </Route>

        <Route path={"/posts"}>
<AllPosts/>
        </Route>

        <Route path={"/comments"}>
            <AllComments/>
        </Route>

    </Switch>
</div>

            </div>

            </Router>
        );
    }
}

export default App;