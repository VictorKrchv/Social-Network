import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';
import { Element } from '../../common/FormsControls/FormsControls';

const Textarea = Element("textarea");
const maxLength30 = maxLengthCreator(30)

const MyPosts = (props) => {
    console.log("RENDER")
    let postsElements =
        props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

    let onAddPost = (values) => {
        props.addPost(values.newPostBody)
        values.newPostBody = ""
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
               <AddPostReduxForm onSubmit={onAddPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <Field component={Textarea} 
               name={'newPostBody'} 
               placeholder={'Enter your text'}
               validate={[required, maxLength30]} />
        <div>
            <button >Add post</button>
        </div>
    </form>)
}

const AddPostReduxForm = reduxForm({form: "postMessageAdd"})(AddPostForm)


export default MyPosts;