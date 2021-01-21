import React, {Component} from 'react';
import AllServicesforPosts from "../AllServices/ServicesforPosts/AllServicesforPosts";
import Post from "../Post/Post";

class AllPosts extends Component {
    state = {posts:[]};
postServices = new AllServicesforPosts();

async componentDidMount() {
    let posts = await this.postServices.posts()
    this.setState({posts});
}

    render() {
        let {posts} = this.state;
        return (
            <div>
                {posts.map(value =><Post item={value} key={value.id}/> )}
            </div>
        );
    }
}

export default AllPosts;