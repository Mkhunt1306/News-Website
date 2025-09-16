import React from 'react';

function About(props) {
    return (
        <div className='container text-center my-5' style={props.myStyle}>
            <h1>About Us</h1>
            <p>This is a simple About page built using React.</p>
        </div>
    );
}

export default About;
