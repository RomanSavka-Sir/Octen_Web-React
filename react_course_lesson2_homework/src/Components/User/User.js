import React, {Component} from 'react';
import "./Users_css.css"
class User extends Component {
    render() {
        let {variable,clicks}  = this.props;

        return (
            <div>
               {variable.id} - {variable.name}
                <button onClick={clicks.bind(this, variable.id)}>choose me</button>
            </div>
        );
    }
}

export default User;