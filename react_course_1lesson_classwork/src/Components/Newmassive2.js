import React, {Component} from 'react';

class Newmassive2 extends Component {
    render() {
        let {city} =this.props
        return (
            <div>
                {city.name} - {city.population} - {city.country} - {city.region}

            </div>
        );
    }
}

export default Newmassive2;