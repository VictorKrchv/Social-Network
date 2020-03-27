import Friends from './Friends'
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state) => {
    return {
        friendsPage: state.friendsPage,
    }
}




export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect
)(Friends)


