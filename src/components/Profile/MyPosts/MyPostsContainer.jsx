import React from 'react';
import { addPost, deletePost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}




const MyPostsContainer = connect(mapStateToProps, {addPost, deletePost})(MyPosts);

export default MyPostsContainer;