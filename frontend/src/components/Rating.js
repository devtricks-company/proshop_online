import React from 'react'
import {FaStarHalfAlt,FaStar,FaRegStar} from 'react-icons/fa';
const Rating = ({value,numReview}) => {
    return (
        <div>
            {value >= 1 ? <FaStar color='#f5bc04' /> : value >= 0.5 ? <FaStarHalfAlt color='#f5bc04' /> : <FaRegStar color="#f5bc04" />}
            {value >= 2 ? <FaStar color='#f5bc04' /> : value >= 1.5 ? <FaStarHalfAlt color='#f5bc04' /> : <FaRegStar color="#f5bc04" />}
            {value >= 3 ? <FaStar color='#f5bc04' /> : value >= 2.5 ? <FaStarHalfAlt color='#f5bc04' /> : <FaRegStar color="#f5bc04" />}
            {value >= 4 ? <FaStar color='#f5bc04' /> : value >= 3.5 ? <FaStarHalfAlt color='#f5bc04' /> : <FaRegStar color="#f5bc04" />}
            {value >= 5 ? <FaStar color='#f5bc04' /> : value >= 4.5 ? <FaStarHalfAlt color='#f5bc04' /> : <FaRegStar color="#f5bc04" />}
            <span className='px-2'>
                from {numReview} reviews
            </span>
        </div>
    )
}

export default Rating
