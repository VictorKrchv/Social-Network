import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { Element } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators';

const maxLength50 = maxLengthCreator(50)
const Textarea = Element("textarea");

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} surname={d.surname} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />);


    let addMessage = (values) => {
        props.addMessage(values.newMessageBody)
        values.newMessageBody = ""
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogs__main}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div className={s.messages__list}> {messagesElements} </div>
                    <AddMessageFormRedux onSubmit={addMessage} />
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


// <form action="" onSubmit={props.handleSubmit}>
//             <div className={s.dialogs__input}>
//                 <textarea className={s.message__input}
//                     onChange={onMessageChange}
//                     value={props.dialogsPage.newMessageText}
//                 />
//                 <button className={s.message__btn} onClick={addMessage}>Добавить сообщение</button>
//             </div>
//         </form>