import React, {Component} from 'react';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class Comment extends Component {
    render() {
        let {variable, match:{url}} = this.props;
        return (
            <div>
                {variable.id} - {variable.name} - <Link to={url + "/" + variable.id}>
                information
            </Link>
            </div>
        );
    }
}

export default withRouter (Comment);