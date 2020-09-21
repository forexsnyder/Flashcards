import React from 'react';
import './Topic.css';
import { Link } from 'react-router-dom'
import Flashcard from "../../Screens/Flashcard/Flashcard"

const Topic = (props) => {



    return (
        <>
            <Link className="topic" to={`/topics/${props.id}/flashcards`}>
                <div className="product-name">{props.name}</div>
            </Link>
        </>
    )
}

export default Topic