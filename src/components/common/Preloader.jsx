import preLoader from '../../assets/images/preLoader.svg'
import s from './Preloader.module.css';
import React from 'react'

const PreLoader = () => {
    return  <div className={s.loaderblock}>
        <img src={preLoader} alt=""/>
    </div>
}

export default PreLoader;