import React, {Component} from 'react';
import ServicesforPosts from "../Services/ServicesforPosts";

class Fullpost extends Component {
    state = {post1:null}
fullPostservice = new ServicesforPosts();

   async  componentDidMount() {
       let {PostId} = this.props
        let result = await this.fullPostservice.post(PostId);
       this.setState({post1:result})
    }

    render() {
        let {post1} = this.state;
        return (
            <div>
                {post1 && post1.body}
            </div>
        );
    }
}

export default Fullpost;