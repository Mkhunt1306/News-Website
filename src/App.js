import "./App.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Alert from "./Alert";
import Home from "./Home";
import News from "./News";
import Guj from "./Guj";

import { BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
import India from "./India";

function App(props) {
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });

    setTimeout(() => setalert(null), 1500);
  };

  const [myStyle, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [text, setText1] = useState("Enable Dark Mode");

  const togglebtn = () => {
    if (myStyle.color === "black") {
      setStyle({
        color: "white",
        backgroundColor: "#042743",
      });
      document.body.style.backgroundColor = "#042743";
      setText1("Enable Light Mode");
    } else {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.backgroundColor = "white";
      setText1("Enable Dark Mode");
    }
  };


  return (
    <>
      <Router>
  <Navbar title = "ઝટપટ સમાચાર" showAlert={showAlert} togglebtn={togglebtn} text={text} />
  <Alert alert={alert} />
    
  <Routes>
     <Route exact path="/" element={<Navigate to="/home" replace />} />
    <Route exact path="/home" element={<Home myStyle={myStyle}/>} />
   
    {/* <Route exact path="/form" element={<Form myStyle={myStyle} showAlert={showAlert} />} /> */}
     
     <Route exact path="/india" element={<India pageSize="10"/>} /> 
     <Route exact path="/guj" element={<Guj pageSize="10"/>} /> 
     <Route exact path="/news" element={<News pageSize="24" country="us"/>} /> 
     <Route exact path="/business" element={ <News key = "business" pageSize="24" country="us" category ='business'/>} /> 
      <Route exact path="/entertainment" element={ <News key = "entertainment" pageSize="24" country="us" category ='entertainment'/>} /> 
     <Route exact path="/general" element={ <News key = "general" pageSize="24" country="us" category ='general'/>} /> 
     <Route exact path="/health" element={ <News key = "health" pageSize="24" country="us" category ='health'/>} /> 
     <Route exact path="/science" element={ <News key = "science" pageSize="24" country="us" category ='science'/>} /> 
     <Route exact path="/sports" element={ <News key = "sports" pageSize="24" country="us" category ='sports'/>} /> 
     <Route exact path="/technology" element={ <News key = "technology" pageSize="24" country="us" category ='technology'/>} /> 
   
  </Routes>
</Router>

    </>
  );
}

export default App;
