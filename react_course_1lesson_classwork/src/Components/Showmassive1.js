import React, {Component} from 'react';
import Newmassive1 from "./Newmassive1";

class Showmassive1 extends Component {

     cars = [{model: "Audi", year: 1995, power: 1.1, color: "grey"},
        {model: "BMW", year: 2010, power: 2.5, color: "white"},
        {model: "Deo", year: 2003, power: 1.5, color: "black"},
        {model: "Suzuki", year: 2007, power: 1.4, color: "red" },
        {model: "Mercedes", year: 2018, power: 2.5, color: "silver"},
        {model: "Toyota", year: 2014, power: 2.1, color: "white"},
        {model: "Renault", year: 1998, power: 1.3, color: "green"},
        {model: "Volvo", year: 2010, power: 1.8, color: "black"},
        {model: "Jeep", year: 2006, power: 1.6, color: "white"},
        {model: "Skoda", year: 2007, power: 1.5, color: "black"}]

    render() {
        return (
            <div>
                {
                   this.cars.map((value, index) => {
                        return (<Newmassive1 car={value} key={index}/>)

                    })
                }
            </div>
        );
    }
}

export default Showmassive1;