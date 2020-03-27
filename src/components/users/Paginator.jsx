import React, { useState } from 'react'
import s from './Users.module.css';
import arrowLeft from '../../assets/images/left-arrow.svg'
import arrowRight from '../../assets/images/right-arrow.svg'

let Paginator = (props) => {

    const onKeyPress = (p, e) => {
        if (e.key === "Enter") {
            props.onPageChanged(p)
        }
    }

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    function changeRange({ initialState }) {
        const [paginatorRangeValue, setPaginatorRangeValue] = useState(initialState)
        const plusRange = () => {
            if (pagesCount - paginatorRangeValue <= 10) return false
            setPaginatorRangeValue(paginatorRangeValue + 10)
        }
        const minusRange = () => {
            if (paginatorRangeValue < 10) return false
            setPaginatorRangeValue(paginatorRangeValue - 10)
        }
        return [paginatorRangeValue, { plusRange, minusRange, setPaginatorRangeValue }]
    }
    const [paginatorRangeValue, { plusRange, minusRange }] = changeRange({ initialState: 0 })

    let paginatorRange = pages.splice(paginatorRangeValue, 10)

    return (
        <div className={s.pages}>
            <button  onClick={minusRange}><img src={arrowLeft} alt="" /></button>
            {paginatorRange.map(p => {
                return <span tabIndex="0" onKeyPress={(e) => onKeyPress(p, e)} key={[p]} onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p ? s.selectedPage : undefined}>{p}</span>
            })}
            <button onClick={plusRange}><img src={arrowRight} alt="" /></button>
        </div>
    )
}


export default Paginator;

