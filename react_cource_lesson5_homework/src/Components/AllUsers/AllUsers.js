import React, {Component} from 'react';
import ServicesforUsers from "../Services/ServicesforUsers";
import User from "../User/User";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullUser from "../FullUser/FullUser";

class AllUsers extends Component {
state = {users:[]}
usersService =new ServicesforUsers();

componentDidMount() {
    this.usersService.getUsers().then(users => this.setState({users}));
}


    render() {
    let {users} = this.state;
    let {match:{url}} = this.props;
        return (
            <div>
                {users.map(value => <User item={value} key={value.id}/> )}

                <hr/>
                <Switch>
                    <Route path={url + "/:id"} render={(props) =>{
                        let {match:{params:{id}}} =props;
                        return <FullUser userId={id} key={id}/>
                    }}/>
                </Switch>
                <hr/>

            </div>
        );
    }
}

export default withRouter(AllUsers);