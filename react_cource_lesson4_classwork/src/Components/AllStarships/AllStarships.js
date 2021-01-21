import React, {Component} from 'react';
import ServicesforStarships from "../Services/ServicesforStarships";
import Starship from "../Starship/Starship";

class AllStarships extends Component {
    state = {starships:[]};

    starService = new ServicesforStarships();

   async  componentDidMount() {
        let result  = await this.starService.getStarships();
        this.setState({starships:result});
    }

    render() {
       let {starships} = this.state;
        return (
            <div>
                {starships.map((value,index) => <Starship ship={value} key={index}/>)}
            </div>
        );
    }
}

export default AllStarships;