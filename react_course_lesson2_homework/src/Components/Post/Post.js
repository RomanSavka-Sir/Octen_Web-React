import React, {Component} from 'react';
import "./Post_css.css"

class Post extends Component {
    render() {
        let {attr, clickable} = this.props;
        return (
            <div className={"info"}>
                {attr.userId} - {attr.title}
                <button onClick={clickable.bind(this, attr.id)} >Click and choose</button>
            </div>
        );
    }
}

export default Post;