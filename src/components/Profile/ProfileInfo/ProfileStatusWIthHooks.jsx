import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {


    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return <>
        {!editMode
            ? <div className={s.profileInfo__status}>
                <span onDoubleClick={activateEditMode} >{status ? status : 'status'} </span>
            </div>

            : <div >
                <input onChange={onStatusChange} onBlur={deActivateEditMode} value={status} autoFocus />
            </div>}


    </>
}



export default ProfileStatusWithHooks