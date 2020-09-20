import React, { useState, useEffect, useRef } from 'react';
import Layout from "../../Component/Shared/Layout"
import './Welcome.css'
import api from '../../Services/Api-config'
import cards from '../../Resources/flashcards.jpg'
import { Link } from 'react-router-dom'
function Welcome() {
  // flashcard picture ref https://www.youtube.com/watch?v=xVcdlANWsl0
  
  return (
    <Layout>
        <div>
          <h1>Welcome to the welcome page</h1>
          <h2>Take your</h2>
          <div className= "image-flashcard">
            <img src={cards} alt="flashcards" alt="https://www.youtube.com/watch?v=xVcdlANWsl0"className="card"/>
          </div>
          <h2>on the go!!!</h2>
          <div>
          <Link to="/landingpage">ENTER</Link>
          </div>
          
        </div>
    </Layout>
  );
}

export default Welcome;