import React, {Component} from 'react';

class Starship extends Component {
    render() {
        let {ship} = this.props;
        return (
            <div>
                {ship.name} - {ship.model}
            </div>
        );
    }
}

export default Starship;