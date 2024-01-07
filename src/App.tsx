import React from 'react';
import {Routes,Route} from "react-router";
import {MainPage} from "./pages/MainPage/MainPage";
import {WorkerPage} from "./pages/WorkerPage/WorkerPage";
import {GiverPage} from "./pages/GiverPage/GiverPage";
import {ContactPage} from "./pages/ContactPage/ContactPage";
import "./styles/_global.scss"
import {Navigation} from "./components/GlobalComponents/Header/Navigation";
import {Footer} from "./components/GlobalComponents/Footer/Footer";
function App() {
  document.body.classList.add('black');
  return (
    <>
      <Navigation/>
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/worker" element={<WorkerPage/>} />
      <Route path="/employer" element={<GiverPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
      <Footer/>
    </>
  );
}

export default App;
