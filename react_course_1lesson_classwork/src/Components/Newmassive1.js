import React, {Component} from 'react';

class Newmassive1 extends Component {

    render() {
        let {car} = this.props
        return (
            <div>
                {car.model} - {car.year} - {car.power} - {car.color}
            </div>
        );
    }
}

export default Newmassive1;