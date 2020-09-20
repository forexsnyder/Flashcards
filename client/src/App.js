import React, { useState, useEffect, useRef } from 'react';
import './App.css'
import api from './Services/Api-config'
import CUDFlashcards from "./Screens/CUDFlashcards/CUDFlashcards"
import Welcome from "./screens/Welcome/Welcome"


function App() {

  const [subject,updateSubject] = useState()

  useEffect(() => {
    const topics = async () => {
      const data = await api.get('/topics')
      console.log(data.data)
      updateSubject(data)
    
    }

    topics()


  }, [])  
  return (
    <>
      <div className="form-group">
  
      </div>
    </>
  );
}

export default App;