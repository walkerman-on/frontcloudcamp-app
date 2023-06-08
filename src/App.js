import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Main from "./components/Pages/Main"
import Step1 from "./components/Pages/Step1"
import Step2 from "./components/Pages/Step2"
import Step3 from "./components/Pages/Step3"
import Result from "./components/Pages/Result"
import Error from "./components/Pages/Error"

import Header from "./components/Header"

function App() {
  return (
    // <div className="App">
    //   <section>
    //   <div class="user-img">
    //     <span class="first-text">АИ</span>
    //   </div>
    //   </section>
    // </div>
    <>
       <Header />
       <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route path='/step1' element={<Step1/>}/>
          <Route path='/step2' element={<Step2/>}/>
          <Route path='/step3' element={<Step3/>}/>
          <Route path='/result' element={<Result/>}/>
          <Route path="/error" element={<Error/>}/>
        </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
