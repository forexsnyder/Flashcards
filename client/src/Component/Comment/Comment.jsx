import React from 'react';

import { Link } from 'react-router-dom'

const Comment = (props) => {
    console.log(props)
    return (
        <div>
        <h1>{props.id}</h1>
        <h1>{props.comment}</h1>
        </div>

    )
}

export default Comment