import React from 'react';
import './CUDFlashcards.css'
import Layout from "../../Component/Shared/Layout"
import { Link } from 'react-router-dom'
import { createFlashcards } from "../../Services/flashcards"


function CUDFlashcards() {
  const [isCreated, setCreated] = useState(false)
  const [flashcard, setFlashcard] = useState({
    topic_id: null,
    front: '',
    back: ''
})

const handleChange = (event) => {
  const { name, value } = event.target
  setFlashcard({
          ...flashcard,
          [name]: value
  })
}

const handleSubmit = async (event) => {
  event.preventDefault()
  const created = await createFlashcards(flashcard)
  setCreated({ created })
}


if (isCreated) {
  return <Redirect to={`/cudflashcards`} />
}
  
  return (
      <Layout>
        <div>
      <h1>get ready to CUD flashcards</h1>
      
      </div>
      <div>
       
       <label for="cars">Choose a topic:</label>
          <select id="cars" name="cars" size="3">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <input type="submit"></input>
     </div>
     <div>
     <a>Create a new flashcard</a>
     </div>
    <div>
    <form className="create-form" onSubmit={handleSubmit}>
                <input
                    className="input-name"
                    placeholder='Front'
                    value={flashcard.front}
                    name='Front'
                    onChange={handleChange}
                />
                 <textarea
                    className="textarea-back"
                    rows={10}
                    placeholder='Back'
                    value={flashcard.back}
                    name='Back'
                    required
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
    </div>
      </Layout>
  );
}

export default CUDFlashcards;