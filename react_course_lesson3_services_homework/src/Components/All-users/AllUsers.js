import React, {Component} from 'react';
import User from "../user/User";
import {Services} from "../services/Userservice";

class AllUsers extends Component {
userService = new Services();

state = {users:[], chosen:null}

    componentDidMount() {
     this.userService.getAllUsers().then(users => this.setState({users}))
    }


    onChoose =(id) => {
        // let {users} = this.state;
        // this.setState({chosen: users.find(value => value.id === id)})
        // this.userService.getUserId(id).then(value => this.setState({chosen: this.state.users.find(value => value.id === id)}))
        this.userService.getUserId(id).then(value => this.setState({chosen: this.userService.FindId(this.state.users, id)}))

    }

    render() {
    let {users, chosen} = this.state;
        return (
            <div>
                {users.map(value => <User data={value} key={value.id} onChoose={this.onChoose}/>)}
                {
                    chosen && <h4> {chosen.name} - {chosen.address.zipcode} - {chosen.address.geo.lat} - {chosen.address.geo.lng}</h4>
                }
            </div>
        );
    }
}

export default AllUsers;