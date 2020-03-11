import React from 'react';
import s from './FormsControls.module.css';


export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        123
      <div className={ s.formControl + " " + (hasError ? s.error : "") }>
        <Element {...input} {...props} />
        { hasError && <span> { meta.error } </span> }
      </div>
    );
  };

