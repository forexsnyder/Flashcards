import React from 'react';
import './CUDFlashcards.css'
import Layout from "../../Component/Shared/Layout"
import { Link } from 'react-router-dom'

function CUDFlashcards() {

  
  return (
      <Layout>
        <div>
      <h1>get ready to CUD flashcards</h1>
      
      </div>
      <div>
       
       <label for="cars">Choose a topic:</label>
          <select id="cars" name="cars" size="3">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <input type="submit"></input>
     </div>
     <div>
     <a>Create a new flashcard</a>
     </div>
    <div>
      <h1>Front</h1>
      <input></input>
      <h1>Back</h1>
      <textarea className="back-text"></textarea>
      <input type="submit"></input>
    </div>
      </Layout>
  );
}

export default CUDFlashcards;