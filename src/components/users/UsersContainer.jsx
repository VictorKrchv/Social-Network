import { unfollow, follow, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import React from 'react'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getTotalUserCount, getUsers,  getIsFetching, getCurrentPage, getFollowingInProgress } from '../../redux/users-selectors';
import { getPageSize } from '../../redux/users-selectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose(
    connect(mapStateToProps, { follow, unfollow, requestUsers, setCurrentPage, toggleFollowingProgress, }),

)(UsersContainer)



