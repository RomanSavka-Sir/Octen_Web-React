import React, {Component} from 'react';

import "./App.css";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllUsers from "./Components/AllUsers/AllUsers";
import AllPosts from "./Components/AllPosts/AllPosts";
import AllComments from "./Components/AllComments/AllComments";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
<div>
    <Link to={"/users"} >
        Users
    </Link>
</div>
                    <div>
                        <Link to={"/posts"}>
                            Posts
                        </Link>
                    </div>

                    <div>
                        <Link to={"/comments"}>
                            Comments
                        </Link>
                    </div>

                    <div className={"app-css"}>

                        <Switch>
<Route path={"/users"} render={(props) => {
    return <AllUsers/>
}}/>
<Route path={"/posts"} render={(props) => {
    return <AllPosts/>
}}/>
<Route path={"/comments"} render={(props) => {
    return <AllComments/>
}}/>
                        </Switch>
                    </div>

                </div>
            </Router>

        );
    }
}

export default App;