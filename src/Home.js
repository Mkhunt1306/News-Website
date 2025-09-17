import React from 'react';
import "./App.css";

export default function Home(props){
    return(
            <>
              <div className=" position-absolute" style={{ zIndex: -1 }}  >
                    <img className="img" src="/w3.png" alt="Background Img For Home Page" />
                </div>
                <h1 className='text-center my-4 text-white' style={{ position: 'relative', zIndex: 1 }}>ઝટપટ સમાચાર માં આપનું સ્વાગત છે.</h1>
            </>



        
    );
}