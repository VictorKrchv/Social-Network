import { unfollow, follow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import React from 'react'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
            this.props.setCurrentPage(pageNumber)
    }
    render() {
        return <>
            <Users totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default compose(
    connect(mapStateToProps, { follow, unfollow, getUsers, setCurrentPage, toggleFollowingProgress, }),
     
)(UsersContainer)



