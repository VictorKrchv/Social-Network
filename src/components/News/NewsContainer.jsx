import { connect } from 'react-redux';
import News from './News';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
        
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {})
)(News)
