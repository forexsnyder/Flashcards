import React, { useState, useEffect } from 'react'
import './Flashcard.css'
import Layout from '../../Components/Shared/Layout'
import { getFlashcards, deleteFlashcard } from '../../services/flashcards'
import { useParams, Link } from 'react-router-dom'

const Flashcard = (props) => {

    const [flashcard, setFlashcard] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchFlashcard = async () => {
            const data = await getFlashcards(id)
            setFlashcard(data.data)
            setLoaded(true)
        }
        fetchFlashcard()
    }, [id])

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    return (
        <Layout>
            <div className="flashcard-detail">
                <div className="detail">
                    <div className="front">{flashcard.front}</div>
                    <div className="back">{flashcard.back}</div>
                    <div className="button-container">
                        {/* <button className="edit-button"><Link className="edit-link" to={`/products/${product._id}/edit`}>Edit</Link></button> */}
                        <button className="delete-button" onClick={() => deleteFlashcard(flashcard._id)}>Delete</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Flashcard