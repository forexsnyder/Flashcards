import React from 'react';




const Card = ({flashcards}) => {
const [{attributes}] = flashcards 

    return (
        <div>
            <h1>{attributes.front}</h1>
            <h1>{attributes.back}</h1>
        </div>

    )
}

export default Card