import React, { useState, useEffect } from 'react'
import './Flashcard.css'
import Layout from '../../Component/Shared/Layout'
import { getFlashcards, deleteFlashcard } from '../../Services/flashcards'
import { useParams, Link } from 'react-router-dom'
import api from '../../Services/api-config'
import Card from '../../Component/Card'

const Flashcard = (props) => {

    const [flashcard, setFlashcard] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const { id } = useParams()
    

    useEffect(() => {
        const fetchFlashcard = async () => {
            const result = await api.get(`/topics/${id}/flashcards`)
            setFlashcard(result.data.data)
             setLoaded(true)
           
        }
        fetchFlashcard()
    }, [id])
    console.log(flashcard)

    // const handleDelete = async (event) =>{
    //     event.preventDefault()
    //     const del = await deleteFlashcard(flashcard.id)
        

    // } 
    




    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    return (
        <Layout>
            <div>
                <Card flashcards={flashcard}/>
            </div>
            <div className="button-container">
            <button className="edit-button"><Link className="edit-link" to={`/flashcards/${flashcard._id}/edit`}>Edit</Link></button>
            {/* <button className="delete-button" onClick={handleDelete}>Delete</button> */}
            </div>
        </Layout>
    )
}

export default Flashcard