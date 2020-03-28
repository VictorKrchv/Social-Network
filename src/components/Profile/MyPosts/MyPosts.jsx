import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';
import { Element } from '../../common/FormsControls/FormsControls';


const Textarea = Element("textarea");
const maxLength300 = maxLengthCreator(300)

var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function getData(date) {
    let now = new Date()
    if (now - date < 86400000 * 2) {
        let when = "Today"
        if (now.getDay() !== date.getDay()){
            when = "Yesterday"
        }
        let hours = date.getHours()
        if (hours < 10) hours = "0" + hours
        let minutes = date.getMinutes()
        if (minutes < 10) minutes = "0" + minutes
        return `${when} at ` + hours + ':' + minutes 

    } else if (now.getFullYear !== date.getFullYear()) {  
        return mS[date.getMonth() ] + ' ' + date.getDate() + ' ' + date.getFullYear() 
    } else {
        return mS[date.getMonth() ] + ' ' + date.getDate()
    }
}


const MyPosts = React.memo(props => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post detetePost={() => {props.deletePost(p.id)}} message={p.message} date={getData(p.date)} likesCount={p.likesCount} key={p.id} />);

    let onAddPost = (values) => {
        props.addPost(values.newPostBody)
        values.newPostBody = ""
    }
    

    return (
        <div className={s.postsBlock}>
            <div className={s.form}>
                <AddPostReduxForm onSubmit={onAddPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const AddPostForm = (props) => {
    return (<form className={s.postForm} onSubmit={props.handleSubmit}>
        <div className={s.form__leftSide}>
            <Field component={Textarea}
                name={'newPostBody'}
                placeholder={'Enter your text'}
                validate={[required, maxLength300]} />
        </div>
        <div className={s.form__rightSide}>
            <button className={s.form__btn} >Add post</button>
        </div>
    </form>)
}

const AddPostReduxForm = reduxForm({ form: "postMessageAdd" })(AddPostForm)


export default MyPosts;