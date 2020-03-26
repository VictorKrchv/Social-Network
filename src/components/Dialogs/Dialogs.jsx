import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { Element } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators';
import { useEffect } from 'react';


const maxLength50 = maxLengthCreator(50)
const Textarea = Element("textarea");

const Dialogs = (props) => {


  
    let deleteMessage = (messageId) => {
        props.deleteMessage(messageId, 6688)
    }
    

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem getDialog={props.getMessagesWithUser} getMessagesWithUser={props.getMessagesWithUser} name={d.userName} key={d.id} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message deleteMessage={deleteMessage} userId={props.userId} senderId={m.senderId} message={m.body} key={m.id} id={m.id} />);


    useEffect(() => {
        props.getUserDialogs()
    }, [])


    let addMessage = (values) => {
        props.sendMessage(6688, values.newMessageBody)
        values.newMessageBody = ""
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogs__main}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div className={s.messages__list}> {messagesElements.length > 1 ? messagesElements : <div className={s.hint}>select your companion</div>} </div>
                    {messagesElements.length > 1 ? <AddMessageFormRedux onSubmit={addMessage} /> : null}
                </div>
                
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div className={s.dialogs__input}>
                <Field  className={s.message__input}
                        component={Textarea} name={'newMessageBody'} 
                        placeholder={'Enter your message'} 
                        validate={[required, maxLength50]}/>
                <button className={s.message__btn}>Добавить сообщение</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;


