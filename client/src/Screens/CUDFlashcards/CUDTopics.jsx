import React from 'react';
import './CUDFlashcards.css'
import Layout from "../../Component/Shared/Layout"



function CUDTopics() {


  
  return (
      <Layout>
        <div>
      <h1>get ready to CUD Topics</h1>
      <div>
        <a>Create a new Topic.</a>
        <input></input>
      </div>
     <div>
       <a>Update a topic</a>
       <label for="cars">Choose a car:</label>
          <select id="cars" name="cars" size="3">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <input type="submit"></input>
     </div>
      
      {/* <form className="edit-form" onSubmit={handleSubmit}>
                    <input
                        className="input-name"
                        placeholder='Name'
                        value={product.name}
                        name='name'
                        required
                        autoFocus
                        onChange={handleChange}
                    />
                    <input
                        className="input-price"
                        placeholder='Price'
                        value={product.price}
                        name='price'
                        required
                        onChange={handleChange}
                    />
                    <textarea
                        className="textarea-description"
                        rows={10}
                        cols={78}
                        placeholder='Description'
                        value={product.description}
                        name='description'
                        required
                        onChange={handleChange}
                    />
                    <button type='submit' className="save-button">Save</button>
                </form> */}
            
      
      </div>
      </Layout>
  );
}

export default CUDTopics;