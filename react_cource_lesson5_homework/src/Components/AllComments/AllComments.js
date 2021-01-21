import React, {Component} from 'react';
import ServicesforComments from "../Services/ServicesforComments";
import Comment from "../Comment/Comment";



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullComment from "../FullComment/FullComment";

class AllComments extends Component {
    state = {comments:[]};
    commService = new ServicesforComments();

   async componentDidMount() {
        let result = await this.commService.getComments();
        this.setState({comments:result})
    }

    render() {
       let {comments} = this.state;
       let {match:{url}} = this.props;
        return (
            <div>
                {comments.map(value => <Comment variable={value} key={value.id}/>)}

                <hr/>

                <Switch>
                    <Route path={url + "/:id"} render={(props) => {
                        let {match:{params:{id}}} = props;

                        return <FullComment CommentsId={id} key={id}/>
                    }}/>
                </Switch>

                <hr/>
            </div>
        );
    }
}

export default withRouter (AllComments);