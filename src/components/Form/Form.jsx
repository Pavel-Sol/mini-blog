import { useState, useEffect } from 'react'
import {database, storage} from './../../firebaseConfig'

const Form = ({inputText, handleTextInput, handleFiletInput, sendPost}) => {

  

   return(
      <div className='form__wrapper'>
         <form action="">

            <textarea onChange={handleTextInput} value={inputText} 
             className='form-control'  placeholder="What's on your mind..."></textarea>

            <input
            onChange={handleFiletInput} 
            className='form-control' type="file" accept="images/*"/>

            <button onClick={sendPost} className='btn btn-success'>Upload</button>
         </form>
      </div>
   )
}

export default Form