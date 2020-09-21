import React from 'react';

import { Link } from 'react-router-dom'

const UpdateFlashcard = (props) => {
    return (
        <>
            <Link className="topic" to={`/topics/${props.id}/flashcards`}>
                <div className="product-name">{props.name}</div>
        
            </Link>
        </>
    )
}

export default UpdateFlashcard