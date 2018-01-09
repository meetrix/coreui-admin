/**
 * Created by supun on 08/01/18.
 */
// Core modules
import {connect} from 'react-redux';

//React Component
import TutorsView from './TutorsContainerView'

//Redux Action
import { getTutors } from '../../actions'


function mapStateToProps(state){
    return {
        tutors: state.tutors
    }

}
const mapDispatchToProps = (dispatch) => ({
    getTutors: () => {
        dispatch(getTutors())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TutorsView);