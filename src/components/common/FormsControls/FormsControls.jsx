import React from 'react';
import s from './FormsControls.module.css';


export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <div className={ s.formControl + " " + (hasError ? s.error : "") }>
        <Element {...input} {...props} />
        { hasError && <span> { meta.error } </span> }
      </div>
    );
  };


// export const Textarea = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={s.formControl + " " + (hasError ? s.error : '')}>
     
//                 <textarea  {...props} {...input} />
            
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }
// export const Input = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={s.formControl + " " + (hasError ? s.error : '')}>
     
//                 <input  {...props} {...input} />
            
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }