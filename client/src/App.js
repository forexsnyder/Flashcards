import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route } from "react-router-dom"

import './App.css'
import api from './Services/api-config'
import CUDFlashcards from "./Screens/CUDFlashcards/CUDFlashcards"
import Welcome from "./Screens/Welcome/Welcome"
import Landingpage from "./Screens/Landingpage/Landingpage"
import Flashcard from "./Screens/Flashcard/Flashcard"
import CUDTopics from "./Screens/CUDFlashcards/CUDTopics"
import UpdateFlashcard from './Screens/Flashcard/UpdateFlashcard';
import Comments from './Screens/Comments/Comments'


function App() {

  const [subject,updateSubject] = useState()

  // useEffect(() => {
  //   const topics = async () => {
  //     const data = await api.get('/topics')
  //     console.log(data.data)
  //     updateSubject(data)
  //   }
  //   topics()


  // }, [])  
  return (
      <div className="form-group">
        <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/landingpage" component={Landingpage} />
        <Route exact path="/topics/:id/flashcards" component={Flashcard} />
        <Route exact path="/cudflashcards" component={CUDFlashcards} />
        <Route exact path="/cudtopics/" component={CUDTopics} />
        <Route exact path="/flashcards/:id" component={UpdateFlashcard} />
        <Route exact path="/comments" component={Comments} />
        </Switch>
      </div>
  );
}

export default App;