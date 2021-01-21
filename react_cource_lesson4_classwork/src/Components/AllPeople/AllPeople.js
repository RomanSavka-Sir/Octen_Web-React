import React, {Component} from 'react';
import ServicesforPeople from "../Services/ServicesforPeople";
import People from "../People/People";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullPeople from "../FullPeople/FullPeople";

class AllPeople extends Component {
    state = {people:[]};

    peopleService = new ServicesforPeople();

  async  componentDidMount() {

      let result = await this.peopleService.getPeople();
      this.setState({people: result});
    }


    render() {

      let {people} = this.state;
      let {match:{url}} = this.props
        return (

            <div>
                {people.map((value, index) => <People item={value} key={index} url={url} index={index}/>)}

<hr/>

<Switch>
    <Route path={people} render={(props) => {
        
return <FullPeople/>
    }}/>
</Switch>

<hr/>
            </div>

        );
    }
}

export default withRouter(AllPeople);