
import React from 'react'
import '../pages/course.css'
const Card = (props) => {
  return (
    <>
    {
      props.details.map((value,index)=>(
        <div className='card' key={index}>
          <div className='card-img'>
            <img src={value.img}/>
          </div>
          <div>
            <p className='card-title'>{value.title}</p>
            <p className='description'>{value.description}</p>
          </div>
          <button className='btn'>join us</button>
        </div>
      ))
    }

    </>
  )
}

export default Card
