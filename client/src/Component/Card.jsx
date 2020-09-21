import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {deleteFlashcard} from "../Services/flashcards"
import api from '../Services/api-config'


const Card = (props) => {
    const [comments, setComments] = useState([])
    const [isLoaded, setLoaded] = useState(false)

console.log(props)
const {attributes} = props
const { id } = useParams()
    

useEffect(() => {
    const fetchComments = async () => {
        const result = await api.get(`/flashcards/${props.id}/comments`)
        setComments(result.data.data)
         setLoaded(true)

    }
    fetchComments()

}, [id])
// const commentJSX = comments.map((card, index) =>
// <Card id={card.id} attributes={card.attributes} key={index} />

// )

if (!isLoaded) {
    return <h1>Loading...</h1>
}

    return (
        <div>
            <h1>{props.id}</h1>
            <h1>{attributes.front}</h1>
            <h1>{attributes.back}</h1>
            <button className="edit-button"><Link className="edit-link" to={`/flashcards/${props.id}/edit`}>Edit</Link></button>
            <button className="delete-button" onClick={() => deleteFlashcard(props.id)}>Delete</button>
            {/* <div>
                {commentJSX}
            </div> */}
        </div>

    )
}

export default Card