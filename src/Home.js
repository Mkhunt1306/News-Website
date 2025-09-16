import React from 'react'
import "./App.css";


function Home(props) {
  return (
    <>
  
  <div className="position-absolute top-0 start-50 translate-middle-x" style={{ zIndex: 1, ...props.myStyle }}  >
    <img className="img" src="/w3.png" alt="Background Img For Home Page" />
  </div>
  <h1 className='text-center my-4 text-white' style={{ position: 'relative', zIndex: 1 }}>ઝટપટ સમાચાર માં આપનું સ્વાગત છે.</h1>


      </> 
  
  )
}

export default Home
