import React, {Component} from 'react';
import Post from "../Post/Post";

class AllPosts extends Component {
state = {posts:[], chosenOnes: null };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(posts => {
                this.setState({posts});
            })
    }


    clickable = (id) => {
        let {posts} = this.state;
        let finded = posts.find(value => value.id === id)
        this.setState({chosenOnes: finded})
    }

    render() {
        let {posts, chosenOnes} = this.state;
        return (
            <div>
                {posts.map(value => <Post attr={value} key={value.id} clickable={this.clickable}/>)}
                {chosenOnes &&  <h2>{chosenOnes.id} - {chosenOnes.body}</h2>}
            </div>
        );
    }
}

export default AllPosts;