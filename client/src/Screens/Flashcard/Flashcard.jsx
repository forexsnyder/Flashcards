import React from 'react';
import './Flashcard.css';
import { Link } from 'react-router-dom'
import Layout from "../../Component/Shared/Layout"

const Flashcard = (props) => {
    return (
        <Layout>
        <div>
            <h1>Comment Section</h1>
        </div>
        <div>
            <h1>Create new Comment</h1>
        </div>
        </Layout>
    )
}

export default Flashcard