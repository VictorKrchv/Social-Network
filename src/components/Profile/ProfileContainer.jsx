import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, updateUserStatus, getUserStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.profile === null) return
        let userId = this.props.match.params.userId
        if (prevProps.profile !== this.props.profile) {
            this.props.getUserStatus(userId)
            console.log('ComponentDidUpdate ')
        }
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



