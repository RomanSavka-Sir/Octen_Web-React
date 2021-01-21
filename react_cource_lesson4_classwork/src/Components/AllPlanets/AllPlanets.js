import React, {Component} from 'react';
import ServicesforPlanets from "../Services/ServicesforPlanets";
import Planet from "../Planet/Planet";

class AllPlanets extends Component {

    state = {planets:[]};

    planetsService = new ServicesforPlanets();
   async componentDidMount() {
        let result = await this.planetsService.getPlanets();
        this.setState({planets:result})
    }

    render() {
       let {planets} = this.state;
        return (
            <div>

                {planets.map((value, index) => <Planet data={value} key={index}/>)}
            </div>
        );
    }
}

export default AllPlanets;