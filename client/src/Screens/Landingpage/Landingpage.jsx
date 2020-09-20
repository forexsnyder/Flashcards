import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from '../../Component/FlashcardList';
import axios from 'axios';
import Layout from "../../Component/Shared/Layout";
import api from "../../Services/Api-config"


function Landingpage(){
  const [topics,updateTopics] = useState()

  useEffect(()=>{
    const fetchTopic = async ()=> {
      const resp= await api.get('/topics')
      updateTopics(resp)

    }
    fetchTopic()



  },[])




  return (
    <>

    </>
  );
}

export default Landingpage;