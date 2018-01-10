/**
 * Created by supun on 08/01/18.
 */
// Core modules
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//React Component
import TutorsView from './TutorsContainerView'

//Redux Action
import * as TotursActions from '../../actions/TutorsAction'
//
import {KEY} from '../../constants/ActionCreatorTypes'

function mapStateToProps(state){
    return {
        tutors: state.tutors
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:bindActionCreators(TotursActions,dispatch)
    //bindActionCreators({actions},dispatch)
    //tutorsAction create
    //createActions(KEY.STUDENT_ACTION_CREATE)
    // getTutors: () => {
    //     dispatch(getTutors())
    // }
})

export default connect(mapStateToProps, mapDispatchToProps)(TutorsView);