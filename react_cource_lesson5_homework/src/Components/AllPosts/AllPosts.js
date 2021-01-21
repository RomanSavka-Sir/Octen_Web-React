import React, {Component} from 'react';
import ServicesforPosts from "../Services/ServicesforPosts";
import Post from "../Post/Post";



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Fullpost from "../FullPost/Fullpost";


class AllPosts extends Component {
    state = {posts:[]};
    postService = new ServicesforPosts();

   async componentDidMount() {
        let result = await this.postService.getPosts();
        this.setState({ posts : result});
    }

    render() {

       let {posts} = this.state;
       let {match:{url}} = this.props;


        return (
            <div>
                {posts.map(value => <Post data={value} key={value.id}/> )}

                <hr/>
                <Switch>
                    <Route path={url + "/:id"} render={(props) => {
                        let {match:{params:{id}}} = props;

return <Fullpost PostId={id} key={id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllPosts);