import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Navigation from './components/Navigation';
import ExerciseRow from './components/ExerciseRow';
import { useState } from 'react';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <Router>
    <div className="App">
        <div className="App-header">
          <header><h1>Exercise Tracker</h1>
          <p>Track your exercises below!
          To get started, add, edit, and delete exercises as needed.</p></header>
          <Navigation />
          <Routes>
            <Route exact path="/" 
              element = {<HomePage setExerciseToEdit={setExerciseToEdit} />} />
            <Route path="/add-exercise"
              element = {<CreateExercisePage />} />
            <Route path="/edit-exercise"
              element = {<EditExercisePage exerciseToEdit={exerciseToEdit} />} />
          </Routes>
          <footer>© 2022 Hanami Do</footer>
        </div>
    </div>
    </Router>
  );
}

export default App;
