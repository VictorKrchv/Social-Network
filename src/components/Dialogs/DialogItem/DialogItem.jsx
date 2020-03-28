import React from 'react';
import s from './../Dialogs.module.css';
import icon from '../../../assets/images/dialog-icon.svg'

const DialogItem = (props) => {
    

    let setDialog = (id) => {
        if (!props.isLoading) {
            props.getDialog(id)
        }

    }
    
    let active = props.currentCompanion.id === props.id ? s.active : null

    return <div onClick={setDialog.bind(null, props.id)} className={s.dialog}>

            <div className={s.dialog__item + ' ' + active}>
                <div className={s.dialog__avatar}>
                    <img className={s.dialog__photo} src={icon} alt="avatar" />
                </div>
                <div className={s.dialog__name}>{props.name} </div>
            </div>
      
    </div>
}

export default DialogItem;


