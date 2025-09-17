import "./App.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Alert from "./Alert";
import Home from "./Home";
import News from "./News";
import India from "./India";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App(props) {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const pageSize = 24;
  
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 1500);
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

  const [progress, setProgress] = useState(0);

  const updateProgress = (value) => {
    setProgress(value);
  };

  return (
    <Router>
      <Navbar title="ઝટપટ સમાચાર" togglebtn={togglebtn} text={text} />
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <Alert alert={alert} />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home myStyle={myStyle} />} />
        <Route
          path="/india"
          element={
            <India
              pageSize="10"
              apiKey={apiKey}
              updateProgress={updateProgress}
            />
          }
        />
        <Route
          path="/news"
          element={
            <News
              pageSize={pageSize}
              country="us"
              apiKey={apiKey}
              updateProgress={updateProgress}
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              key="business"
              pageSize={pageSize}
              country="us"
              category="business"
              apiKey={apiKey}
              updateProgress={updateProgress}
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              key="entertainment"
              pageSize={pageSize}
              country="us"
              category="entertainment"
              apiKey={apiKey}
              updateProgress={updateProgress}
            />
          }
        />
        <Route
          path="/general"
          element={
            <News
              key="general"
              pageSize={pageSize}
              country="us"
              category="general"
              apiKey={apiKey}
              updateProgress={updateProgress}
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              key="health"
              pageSize={pageSize}
              country="us"
              category="health"
              apiKey={apiKey}
              updateProgress={updateProgress}
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              key="science"
              pageSize={pageSize}
              country="us"
              category="science"
              apiKey={apiKey}
              updateProgress={updateProgress}
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              key="sports"
              pageSize={pageSize}
              country="us"
              category="sports"
              apiKey={apiKey}
              updateProgress={updateProgress}
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              key="technology"
              pageSize={pageSize}
              country="us"
              category="technology"
              apiKey={apiKey}
              updateProgress={updateProgress}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
