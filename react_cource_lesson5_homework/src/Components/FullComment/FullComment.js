import React, {Component} from 'react';
import ServicesforComments from "../Services/ServicesforComments";

class FullComment extends Component {
    state ={comment:null};
    commService = new ServicesforComments();

    async componentDidMount() {
        let {CommentsId} = this.props;
        let result  = await this.commService.Comment(CommentsId);
        this.setState({comment: result});

    }

    render() {
        let {comment} = this.state;
        return (
            <div>
                {comment && <div> {comment.postId} -{comment.email}</div>}
            </div>
        );
    }
}

export default FullComment;