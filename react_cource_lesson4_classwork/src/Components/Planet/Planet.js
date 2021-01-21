import React, {Component} from 'react';

class Planet extends Component {
    render() {
        let {data} = this.props;
        return (
            <div>
                {data.name}  - {data.terrain}
            </div>
        );
    }
}

export default Planet;