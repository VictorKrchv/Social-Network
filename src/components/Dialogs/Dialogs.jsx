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

    const [currentCompanion, setCurrentCompanion] = useState(null);

    let deleteMessage = (messageId) => {
        props.deleteMessage(messageId, currentCompanion)
    }


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem isLoading={props.dialogsPage.isLoading} currentCompanion={currentCompanion} setCompanion={setCurrentCompanion.bind(null, d.id)} getDialog={props.getMessagesWithUser} getMessagesWithUser={props.getMessagesWithUser} name={d.userName} key={d.id} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message deleteMessage={deleteMessage} userId={props.userId} senderId={m.senderId} message={m.body} key={m.id} id={m.id} />);

    useEffect(() => {
        props.getUserDialogs()
    }, [])


    

    let addMessage = (values) => {
        props.sendMessage(currentCompanion, values.newMessageBody)
        props.startDialog(currentCompanion)
        values.newMessageBody = ""
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogs__main}>
                <div className={s.dialogsItems}>
                    {dialogsElements.length > 0 ? dialogsElements : <PreLoader />}
                </div>
                <div className={s.messages}>
                    <div className={s.messages__list}> {currentCompanion !== null
                        ? messagesElements.length > 0 ? messagesElements : <h3>Список диалогов пуст</h3>
                        : dialogsElements.length > 0 ? <div className={s.hint}>select your companion</div> : null}
                    </div>
                    {currentCompanion !== null ? <AddMessageFormRedux onSubmit={addMessage} /> : null}
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


