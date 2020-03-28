import React from "react"
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth == null) {
                withAuthRedirect(Component)
            } else if (!this.props.isAuth) {
                return <Redirect to="/login" />
            }
            return <Component {...this.props} />
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

export const withLogin = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth) { return <Redirect to={`/profile/${this.props.userId}`} /> }
            return <Component {...this.props} />
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}