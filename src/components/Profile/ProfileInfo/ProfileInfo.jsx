import React from 'react';
import s from './ProfileInfo.module.css';
import PreLoader from '../../common/Preloader';
import profileAvatar from "../../../assets/images/profileAvatar.png"
import ProfileStatus from "./ProfileStatus"
import ProfileContact from './ProfileContact';

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
                    <img src={props.profile.photos.large ? props.profile.photos.large : profileAvatar} alt="" />
                </div>
                <div className={s.profileInfo__description}>
                    <div className={s.profileInfo__name}>{props.profile.fullName}</div>
                    <ProfileStatus updateUserStatus={props.updateUserStatus} status={props.status} />
                    <ProfileContact {...props} />>
                    <div className={s.profileInfo__work}>
                        <div className={s.profileInfo__workTitle}>Работа:</div>
                        <div>В поиске работы: {props.profile.lookingForAJob ? "да" : "нет"}</div>
                        <div>Описание работы: {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : ""} </div>
                    </div>
                </div>
            </div>
            <div className={s.descriptionBlock}>

            </div>
        </div>
    )
}

export default ProfileInfo;