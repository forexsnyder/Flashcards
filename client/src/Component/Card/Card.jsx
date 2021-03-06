import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {deleteFlashcard} from "../../Services/flashcards"
import api from '../../Services/api-config'
import Comment from '../Comment/Comment'


const Card = (props) => {
    
const {attributes} = props

    


    return (
        <div>
            <h1>{props.id}</h1>
            <h1>{attributes.front}</h1>
            <h1>{attributes.back}</h1>
            <button className="edit-button"><Link className="edit-link" to={`/flashcards/${props.id}`}>Edit</Link></button>
            <button className="delete-button" onClick={() => deleteFlashcard(props.id)}>Delete</button>

        </div>

    )
}

export default Card