import React, {Component} from 'react';

import "./App.css";
import {BrowserRouter as Router, Link, Route, Switch,} from "react-router-dom";
import AllPeople from "./Components/AllPeople/AllPeople";
import AllPlanets from "./Components/AllPlanets/AllPlanets";
import AllStarships from "./Components/AllStarships/AllStarships";


class App extends Component {
    render() {
        return (
            <Router>
            <div>
<div>
   <Link to={"/people"}>
       People
   </Link>
</div>
                <div>
                    <Link to={"/planets"}>
                        Planets
                    </Link>
                </div>
                
                <div>
                    <Link to={"/Starships"}>
                        Starships
                    </Link>
                </div>
                


                <div className={"app-class"}>
                    <Switch>

                        <Route path={"/people"} render={(props) => {

return <AllPeople />
                        }}/>
                        <Route path={"/planets"} render={() => {
                            return <AllPlanets/>
                        }}/>

                    <Route path={"/starships"} render={() => {
                        return <AllStarships/>
                    }}/>

                    </Switch>

                </div>
            </div>
            </Router>
        );
    }
}

export default App;