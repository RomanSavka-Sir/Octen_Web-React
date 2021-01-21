import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


class Post extends Component {
    render() {
        let {data, match:{url}} = this.props;
        return (
            <div>
                {data.id} - {data.title} - <Link to={url + "/" + data.id}>
                info
            </Link>
            </div>
        );
    }
}

export default withRouter (Post);