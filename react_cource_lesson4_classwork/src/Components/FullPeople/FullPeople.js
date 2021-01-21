import React, {Component} from 'react';
import ServicesforPeople from "../Services/ServicesforPeople";

class FullPeople extends Component {
    state = {people:null};
    PeopleService = new ServicesforPeople();
    async componentDidMount() {
        let result = await this.PeopleService.People();
        this.setState({people:result});
    }

    render() {
        let {people}  = this.state;

        return (
            <div>

                {people && <div> {people.mass} - {people.height}</div>}
            </div>
        );
    }
}

export default FullPeople;