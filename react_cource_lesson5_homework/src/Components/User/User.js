import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
class User extends Component {
    render() {
        let {item, match:{url}} = this.props;
        return (
            <div>
                {item.id} - {item.username} - <Link to={url + "/" + item.id}>
                more details
            </Link>
            </div>
        );
    }
}

export default withRouter (User);