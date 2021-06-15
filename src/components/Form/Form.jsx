
const Form = ({inputText, handleTextInput, handleFiletInput,
    sendPost, isBtnUploadDisabled}) => {


   return(
      <div className='form__wrapper'>
         <form 
         onSubmit={sendPost}
         action="">

            <textarea onChange={handleTextInput} value={inputText} 
             className='form-control mb-3'  placeholder="What's on your mind..."></textarea>

            <input
            className='form-control'
            onChange={handleFiletInput} 
            type="file" accept="images/*"/>

            {
               isBtnUploadDisabled
               ? <button className="btn btn-success mt-3" type="submit" disabled>
                     <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                     <span className='m-1'>ЗАГРУЖАЕТСЯ...</span>
                  </button>
               : <button type='submit' className='btn btn-success mt-3'>ДОБАВИТЬ ПОСТ</button>
            }
         </form>
      </div>
   )
}

export default Form