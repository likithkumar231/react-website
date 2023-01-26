import React from 'react';

const Todo =(props) => {
  return( 
    <div className='todo-style'>
         <li><button className='but' onClick={()=>{props.onselect(props.id)}}>&times;</button>&nbsp;{props.text}</li><br/>
  </div>
  )
}

export default Todo