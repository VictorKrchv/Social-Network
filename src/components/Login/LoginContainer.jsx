import React from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withLogin } from '../../hoc/withAuthRedirect'
import { loginUser } from '../../redux/auth-reducer'

class LoginContainer extends React.Component {
    render() {
        return <>
            <Login loginUser={this.props.loginUser}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}


export default compose(
    connect(mapStateToProps, {loginUser} ),
    withLogin
)(LoginContainer)