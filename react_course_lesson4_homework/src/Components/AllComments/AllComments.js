import React, {Component} from 'react';
import AllServicesforComments from "../AllServices/ServicesforComments/AllServicesforComments";
import Comment from "../Comment/Comment";

class AllComments extends Component {
    state = {comment:[]}
commentsService = new AllServicesforComments();
async componentDidMount() {
   let comment =  await this.commentsService.comments();
   this.setState({comment});
}


    render() {
    let {comment} = this.state;
        return (
            <div>
                {comment.map(value => <Comment val={value} key={value.id}/>)}
            </div>
        );
    }
}

export default AllComments;