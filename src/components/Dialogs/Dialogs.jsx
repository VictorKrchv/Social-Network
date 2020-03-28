import React, { useState } from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { Element } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators';
import { useEffect } from 'react';
import PreLoader from '../common/Preloader';


const maxLength50 = maxLengthCreator(50)
const Textarea = Element("textarea");

const Dialogs = (props) => {

    useEffect(() => {
        props.getUserDialogs()
    }, [])


    let deleteMessage = (messageId) => {
        props.deleteMessage(messageId, props.dialogsPage.currentCompanion.id)
    }

    let addMessage = (values) => {
        props.sendMessage(props.dialogsPage.currentCompanion.id, values.newMessageBody)
        props.startDialog(props.dialogsPage.currentCompanion.id)
        values.newMessageBody = ""
    }


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem
        isLoading={props.dialogsPage.isLoading}
        currentCompanion={props.dialogsPage.currentCompanion}
        setCompanion={props.setCurrentCompanion.bind(null, d.id)}
        getDialog={props.getMessagesWithUser}
        getMessagesWithUser={props.getMessagesWithUser}
        name={d.userName}
        key={d.id}
        id={d.id}
        isLoading={props.dialogsPage.isLoading} />);


    let messagesElements = props.dialogsPage.messages.map(m => <Message
        deleteMessage={deleteMessage}
        userId={props.userId}
        senderId={m.senderId}
        message={m.body}
        key={m.id}
        id={m.id}
        isLoading={props.dialogsPage.isLoading} />);

    return (
        <div className={s.dialogs}>

            <div className={s.dialogs__main}>
                <div className={s.dialogsItems}>
                    {dialogsElements.length > 0
                        ? dialogsElements
                        : <div className={s.dialogsClear}>The list of dialogs is empty. <br /> Start dialog with user in profile.</div>}
                </div>

                <div className={s.messages}>
                    {props.dialogsPage.isLoading
                        ? <div className={s.hint}><PreLoader /></div>
                        : <div className={s.messages__list}>
                            {props.dialogsPage.currentCompanion.id !== null
                                ? messagesElements.length > 0 ? messagesElements : <h3>Список сообщений пуст</h3>
                                : dialogsElements.length > 0 ? <div className={s.hint}>Select your companion</div> : null}
                        </div>}
                    {props.dialogsPage.currentCompanion.id !== null ? <AddMessageFormRedux onSubmit={addMessage} /> : null}
                </div>
            </div>

        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div className={s.dialogs__input}>
                <Field className={s.message__input}
                    component={Textarea} name={'newMessageBody'}
                    placeholder={'Enter your message'}
                    validate={[required, maxLength50]} />
                <button className={s.message__btn}>Добавить сообщение</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs;


