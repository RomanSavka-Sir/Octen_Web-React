import React, {Component} from 'react';
import Newmassive2 from "./Newmassive2";

class Showmassive2 extends Component {

     cities = [{name: "Lviv", population: 900000, country: "Ukraine", region: "Europe"},
  {name: "Barcelona", population: 500000, country: "Spain", region: "Europe"},
  {name: "Milan", population:3400000000 , country: "Italy", region: "Europe"},
  {name: "Toronto", population: 2500000000, country: "Canada", region: "North America"},
  {name: "Chicago", population: 3200000000, country: "USA", region: "North America"},
  {name: "Oslo", population: 1300000000, country: "Norway", region: "Europe"},
  {name: "New Deli", population: 400000000000, country: "India", region: "Asia"},
  {name: "Berlin", population: 1400000000, country: "Germany", region: "Europe"},
  {name: "Paris", population: 3200000000, country: "France", region: "Europe"},
  {name: "London", population: 50000000000, country: "Great Britain", region: "Europe"}]

    render() {
        return (
            <div>
                {this.cities.map((value, index) => {
                    return (<Newmassive2 city={value} key={index}/>)
                })}
            </div>
        );
    }
}

export default Showmassive2;