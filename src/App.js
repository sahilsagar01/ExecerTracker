import React from 'react';
// import {BrowserRouter, Router,Routes, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Navigation from './components/Navbar.component';
import ExercisesList from './components/exercise.list.component';
import EditExercises from './components/edit.exercises.component';
import CreateExercises from './components/create.exercise.component';
import CreateUser from './components/create.users.component';



function App() {
  return (
   <BrowserRouter>
     <Routes>
      <Route path='/' index element={ExercisesList} />
      <Route path='/edit/:id' element={EditExercises} />
      <Route path='/create' element={CreateExercises} />
      <Route path='/user' element={CreateUser} />
    </Routes>
   </BrowserRouter>
  
  );
}

export default App;
