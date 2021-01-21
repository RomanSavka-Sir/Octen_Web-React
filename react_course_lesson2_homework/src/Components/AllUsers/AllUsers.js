import React, {Component} from 'react';
import User from "../User/User";

class AllUsers extends Component {
    state = {users:[], chosenOne:null};

    componentDidMount() {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(users => {
                this.setState({users})
            })
    }

    clicks = (id) => {
        let {users} = this.state;
        let find = users.find(value => value.id === id);
        this.setState({chosenOne: find});

    }

    render() {
        let {users,chosenOne} = this.state;
        return (
            <div>
                {users.map(value => <User variable={value} key={value.id} clicks={this.clicks}/>)}
                {chosenOne && <h2>{chosenOne.id} - {chosenOne.name}</h2>}
                </div>

        );
    }

}

export default AllUsers;