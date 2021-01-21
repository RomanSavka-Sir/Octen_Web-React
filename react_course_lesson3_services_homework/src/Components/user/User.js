import React, {Component} from 'react';

class User extends Component {
    render() {
        let {data,onChoose} = this.props
        return (
            <div>
                {data.id} - {data.username}
                <button onClick={onChoose.bind(this, data.id)}> click and choose</button>
            </div>
        );
    }
}

export default User;