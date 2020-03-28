import React from 'react';
import s from './ProfileInfo.module.css';
import PreLoader from '../../common/Preloader';
import profileAvatar from "../../../assets/images/profileAvatar.png"
import ProfileContact from './ProfileContact';
import ProfileStatusWithHooks from './ProfileStatusWIthHooks';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startDialog, getMessagesWithUser } from '../../../redux/dialogs-reducer';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <div>
            <PreLoader />
        </div>
    }
    
    
    const dispatch = useDispatch()
    
    let startDialogWithUser = async (id) => {
        let response = await dispatch(startDialog(id))
        if (response) dispatch(getMessagesWithUser(id))
    }

    return (
        <div>
            <div className={s.profileInfo}>
                <div className={s.profileInfo__left}>
                    <div className={s.profileInfo__photoInner}>
                        <img src={props.profile.photos.large ? props.profile.photos.large : profileAvatar} alt="" />
                    </div>
                    <div className={s.profileInfo__getDialog}>
                        <NavLink onClick={() => startDialogWithUser(props.profile.userId)} to={`/dialogs`}>Start Messages</NavLink>
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