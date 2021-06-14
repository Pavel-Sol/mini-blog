import { useState, useEffect } from 'react'
import {database, storage} from './../../firebaseConfig'

const Form = ({inputText, handleTextInput, handleFiletInput, sendPost}) => {


   return(
      <div className='form__wrapper'>
         <form 
         onSubmit={sendPost}
         action="">

            <textarea onChange={handleTextInput} value={inputText} 
             className='form-control'  placeholder="What's on your mind..."></textarea>

            <input
            onChange={handleFiletInput} 
            type="file" accept="images/*"/>

            <button type='submit' className='btn btn-success'>Upload</button>
         </form>
      </div>
   )
}

export default Form