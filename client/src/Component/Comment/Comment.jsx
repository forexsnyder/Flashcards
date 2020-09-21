import React from 'react';

import { Link } from 'react-router-dom'

const Comment = ({comment}) => {
    return (
        <div>
        <h1>{comment}</h1>
        </div>

    )
}

export default Comment