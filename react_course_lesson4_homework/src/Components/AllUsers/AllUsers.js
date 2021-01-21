import React, {Component} from 'react';
import User from "../User/User";
import AllServices from "../AllServices/ServicesforUsers/AllServices";

class AllUsers extends Component {
    usersServices = new AllServices()
    state = {users: []}

   async componentDidMount() {
     let users = await this.usersServices.users();
     this.setState({users});
    }


    render() {
      let {users} =this.state;
        return (
            <div>
                {users.map(value => <User data={value} key={value.id}/>)}
            </div>
        );
    }
}

export default AllUsers;