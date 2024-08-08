import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import  Navbar  from "./components/Navbar/Navbar";
import {LogIn} from '../src/components/LogIn/LogIn';
import { Registeration } from "./components/Regestration/Registeration";
import { Home } from "./components/Home/Home";
import {About} from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Studient } from "./components/Studient/Studient";
import WebcamVideo from "./components/webcam/WebcamVideo";
import  {Exam } from "./components/Exam/Exam";
import { Admin } from "./components/Admin/Admin";
import { Account } from "./components/Account/Account";
import {AdminDash} from "./components/AdminDash/AdminDash"
import { AddQuestions } from "./components/Questions/AddQuestions";
import { Score } from "./components/Score/Score";
import { View } from "./components/ViewResults/View";
import { Control } from "./components/Control/Control";



export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Navbar />
        <Routes>

          <Route path="" element={<About/>}></Route>
          <Route path="About" element={<About/>}></Route>
          <Route path="Register" element={<Registeration />} />
          <Route path="LogIn" element={<LogIn/>}></Route>
          <Route path="webcam" element={<WebcamVideo/>}></Route>
          <Route path="Studient/:id" element={<Studient/>}></Route>
          <Route path="Home" element={<Home/>}></Route>
          <Route path="Exam/:id" element={<Exam/>}></Route>
          <Route path="Admin" element={<Admin/>}></Route>
          <Route path="Account" element={<Account/>}></Route>
          <Route path="questions" element={<AddQuestions/>}></Route>
          <Route path="AdminDash" element={<AdminDash/>}></Route>
          <Route path="score/:id" element={<Score/>}></Route>
          <Route path="view" element={<View/>}></Route>
          <Route path="control" element={<Control/>}></Route>
          <Route path="*" element={<><h1>404 page not found</h1></>} />

        </Routes>
        <Footer/>
      </>
    );
  }
}
