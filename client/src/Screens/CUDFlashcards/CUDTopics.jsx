
import React, { useState, useEffect } from 'react'
import './CUDFlashcards.css'
import Layout from "../../Component/Shared/Layout"
import { Link } from 'react-router-dom'
import { createTopic } from "../../Services/topics"

function CUDTopics() {
  const [topic, setTopic] = useState({
    name: '',
})

const handleChange = (event) => {
const { name, value } = event.target
setTopic({
        ...topic,
        [name]: value
})
}

  const handleSubmit = async (event) => {
    event.preventDefault()
    const create = await createTopic(topic)

}

  return (
      <Layout>
            <form className="create-form" onSubmit={handleSubmit}>
                <input
                    className="input-name"
                    placeholder='Name'
                    value={topic.name}
                    name='name'
                    required
                    autoFocus
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
     <Link to="/cudflashcards">Create Flashcards</Link>
      </Layout>
  );
}

export default CUDTopics;