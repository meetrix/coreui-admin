/**
 * Created by supun on 08/01/18.
 */
/**
 * Created by supun on 08/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Tutor extends Component {

    componentWillMount(){
        //this.props.getTutors();
    }
    render() {
        return(
            <li>
                <p>TutorName: {this.props.name}</p>
            </li>


        )
    }
}

Tutor.propTypes = {
    id:PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    getTutors:PropTypes.func.isRequired



};

export default Tutor;