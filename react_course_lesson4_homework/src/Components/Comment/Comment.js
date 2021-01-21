import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {val} = this.props;
        return (
            <div>
                {val.id} - {val.email}
            </div>
        );
    }
}

export default Comment;