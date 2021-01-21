import React, {Component} from 'react';
import "./Styleuser.css"
class User extends Component {
    render() {
        let {user, sstyle} = this.props;

        return (
            <div className={sstyle}>
                {user.name} - {user.age} - {user.status.toString()}
            </div>
        );
    }
}

export default User;