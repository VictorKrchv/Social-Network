import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, updateUserStatus, getUserStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.id
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.match.params.userId !== nextProps.match.params.userId) {
            this.props.getUserProfile(nextProps.match.params.userId)
            this.props.getUserStatus(nextProps.match.params.userId)
        }
        return true
    }

    render() {
        return (
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.auth.userId
})

export default compose(
    connect(mapStateToProps, { getUserProfile, updateUserStatus, getUserStatus }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)



