import React from 'react'
import './Home.css'
import one from '../photos/one.jpg'
const Home = () => {
  return (
    <>
    <div className='right-box'> 
     <img src={one} alt='jdf'/>
    </div>
    <div className='Container-text'>
      <h1>Learning Made Easy</h1><br/>
      <p>In saepe recusandae et tempore dolores sed sunt eveniet aut dicta velit qui amet ipsum in deleniti tenetur. Est temporibus cumque qui omnis officia qui culpa illo aut amet soluta est dolore doloribus cum dolor maiores? Aut reiciendis modi est quod neque ab amet exercitationem nam galisum omnis hic reiciendis perferendis id impedit totam sed earum architecto.
      </p>
      <div className='btn'>
      <button className='button-33'>Login</button>
      </div>
    </div>
    </>
  )
}

export default Home
