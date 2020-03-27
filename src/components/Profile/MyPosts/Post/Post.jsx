import React from 'react';
import s from './Post.module.css';
import deleteIcon from '../../../../assets/images/delete-icon.svg'

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.post__img}>
        <img  alt="user" src='https://pngimage.net/wp-content/uploads/2018/06/who-icon-png-1.png' />
      </div>
      <div className={s.post__info}>
        <div className={s.post__author}>Victor</div>
        <div className={s.post__date}>{props.date}</div>
      </div>
      <div className={s.post__content}>{props.message}</div>
      <div className={s.post__likes} >
        Likes {props.likesCount}
      </div>
      <img alt="delete-icon" className={s.post__deleteIcon} src={deleteIcon} onClick={props.detetePost} />
    </div>
  )
}

export default Post;