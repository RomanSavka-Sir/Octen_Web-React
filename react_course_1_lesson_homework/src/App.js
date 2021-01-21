import React, {Component} from 'react';
import {users} from "./database/Data";
import User from "./Components/User/User";

class App extends Component {

    render() {
        return (
            <div>
                {users.map((value, index) => {
                    let cs = index%2 ? "even" : "odd"
                    return (<User user={value} key={index} sstyle={cs}/>)
                })}
            </div>
        );
    }
}

export default App;