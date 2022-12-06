import React from 'react';
import './App.css';

function question() {
  return (
    <div>
      <label for="question">Question: </label>
      <textarea id="question" name="question" rows="5" cols="33"></textarea>
    </div>
  )
}

function explication() {
  return (
    <div>
      <label for="explication">Explication: </label>
      <textarea id="explication" name="explication" rows="5" cols="33"></textarea>
    </div>
  )
}

function reponse() {
  return (
    <div>
      <label for="reponse">Reponse: </label>
      <textarea id="reponse" name="reponse" rows="5" cols="33"></textarea>
    </div>
  )
}

function submit() {
  return (
    <button>
      Créer une carte
    </button>
  )
}

function App() {
  return (
    <div className="App">
      {question()}
      {reponse()}
      {explication()}
      {submit()}
    </div>
  );
}

export default App;