/**
 * Created by supun on 08/01/18.
 */
// Core modules
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//React Component
import TutorsView from './TutorsContainerView'

//Redux Action
import * as TotursActions from '../../actions'


function mapStateToProps(state){
    return {
        tutors: state.tutors
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:bindActionCreators(TotursActions,dispatch)
    // getTutors: () => {
    //     dispatch(getTutors())
    // }
})

export default connect(mapStateToProps, mapDispatchToProps)(TutorsView);