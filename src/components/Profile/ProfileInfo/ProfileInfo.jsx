import React from 'react';
import s from './ProfileInfo.module.css';
import PreLoader from '../../common/Preloader';
import profileAvatar from "../../../assets/images/profileAvatar.png"
import ProfileStatus from "./ProfileStatus"
import ProfileContact from './ProfileContact';
import ProfileStatusWithHooks from './ProfileStatusWIthHooks';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <div>
            <PreLoader />
        </div>
    }

    return (
        <div>
            <div className={s.profileInfo}>
                <div className={s.profileInfo__photo}>
                    <div className={s.profileInfo__photoInner}>
                        <img src={props.profile.photos.large ? props.profile.photos.large : profileAvatar} alt="" />
                    </div>
                </div>
                <div className={s.profileInfo__description}>
                    <div className={s.profileInfo__name}>{props.profile.fullName}</div>
                    <ProfileStatusWithHooks updateUserStatus={props.updateUserStatus} status={props.status} />
                   
                    <div className={s.profileInfo__work}>
                        <hr />
                        <div className={s.profileInfo__workTitle}>Main Information</div>
                        <div className={s.profileInfo__main}>
                            <div>Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</div>
                            <div>Professionals skills: {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : ""} </div>
                        </div>
                    </div>
                    <ProfileContact {...props} />

                </div>
            </div>
            <div className={s.descriptionBlock}>

            </div>
        </div>
    )
}

export default ProfileInfo;