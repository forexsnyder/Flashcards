import React from 'react';

import { Link } from 'react-router-dom'

const Comment = ({id,comment}) => {
    console.log(id)
    return (
        <div>
        <h1>{id}</h1>
        <h1>{comment}</h1>
        </div>

    )
}

export default Comment