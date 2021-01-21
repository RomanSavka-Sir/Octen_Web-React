import React, {Component} from 'react';
import AllUsers from "./Components/AllUsers/AllUsers";
import AllPosts from "./Components/AllPosts/AllPosts";

class App extends Component {
    render() {
        return (
            <div>
                <AllUsers/>
                <AllPosts/>
            </div>
        );
    }
}

export default App;