import React, {Component} from 'react';

class User extends Component {
    render() {
        let {data} = this.props;
        return (
            <div>
                {data.id} - {data.username}
            </div>
        );
    }
}

export default User;