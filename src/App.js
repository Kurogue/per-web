import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { useState } from "react";

function App() {
  const windows = {
    aboutMe: 0,
    project: 1,
    resume: 2,
    contact: 3,
  };

  const [curWindow, setCurWindow] = useState(windows.aboutMe);
  return (
    <div className="App">
      <Topbar curWindow={curWindow} setCurWindow={setCurWindow} />
      {curWindow === windows.aboutMe && <About />}
      {curWindow === windows.contact && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
