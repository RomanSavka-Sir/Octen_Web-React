import React, {Component} from 'react';
import ServicesforUsers from "../Services/ServicesforUsers";



class FullUser extends Component {
    userService = new ServicesforUsers();
    state = {user:null}

    componentDidMount() {
        let {userId} = this.props;
        this.userService.user(userId).then(user => this.setState({user}))
    }




    render() {
       let {user} = this.state;

        return (
            <div>
                {user && <div> {user.name} - {user.phone}</div>}
            </div>
        );
    }
}

export default FullUser;