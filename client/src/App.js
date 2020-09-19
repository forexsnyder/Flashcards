import React, { useState, useEffect, useRef } from 'react';
import './App.css'
import api from './Services/Api-config'

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