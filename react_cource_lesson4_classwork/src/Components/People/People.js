import React, {Component} from 'react';
import {Link} from "react-router-dom";



class People extends Component {
    render() {
        let {item, url,index} = this.props;
        return (
            <div>
                {item.name}  - {item.gender} <Link to={`${url}/${++index}`}><button>DETAILS</button></Link>
            </div>

        );
    }
}





export default  People;