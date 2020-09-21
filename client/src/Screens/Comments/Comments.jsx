import React, { useState, useEffect, useRef } from 'react';
import api from '../../Services/api-config'


const Comments = () => {
    const [comments,updateComments] = useState([])
    const params = useParams();
  
    useEffect(()=>{
      const fetchComment = async ()=> {
        const resp= await api.get('/comments')
        updateComments(resp.data)
        console.log(resp.data)
      }
      fetchComment()
    },[])
    

    return (
        <div>

        </div>

    )
}

export default Comments