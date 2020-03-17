import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileContact = (props) => {
    return (
        <div className={s.contacts}>
            <hr />
            <div className={s.contacts__title}>Contacts</div>
            <div className={s.contacts__main}>
                <div>Facebook: <a href={props.profile.contacts.facebook}> {!props.profile.contacts.facebook ? "" : props.profile.contacts.facebook}</a></div>
                <div>Website: <a href={props.profile.contacts.website}> {!props.profile.contacts.website ? "" : props.profile.contacts.website}</a></div>
                <div>VK: <a href={props.profile.contacts.vk}> {!props.profile.contacts.vk ? "" : props.profile.contacts.vk}</a></div>
                <div>Twitter: <a href={props.profile.contacts.twitter}> {!props.profile.contacts.twitter ? "" : props.profile.contacts.twitter}</a></div>
                <div>Instagram: <a href={props.profile.contacts.instagram}> {!props.profile.contacts.instagram ? "" : props.profile.contacts.instagram}</a></div>
                <div>Youtube: <a href={props.profile.contacts.youtube}> {!props.profile.contacts.youtube ? "" : props.profile.contacts.youtube}</a></div>
                <div>GitHub: <a href={props.profile.contacts.github}>{!props.profile.contacts.github ? "" : props.profile.contacts.github}</a></div>
                <div>MainLink:<a href={props.profile.contacts.mainLink}>{!props.profile.contacts.mainLink ? "" : props.profile.contacts.mainLink}</a></div>
            </div>
        </div>
    )
}

export default ProfileContact;