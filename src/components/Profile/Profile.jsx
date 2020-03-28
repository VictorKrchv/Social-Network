import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    
    return (
        <div>
            <ProfileInfo  profile={props.profile} updateUserStatus={props.updateUserStatus} status={props.status} />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;


// state={props.state}
// dispatch={props.dispatch}
// newPostText={props.state.profilePage.newPostText}