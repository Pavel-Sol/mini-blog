

const Form = () => {
   return(
      <div className='form__wrapper'>
         <form action="">
            <textarea  placeholder="What's on your mind..."></textarea>
            <input type="file" accept="images/*"/>
            <button>Upload</button>
         </form>
      </div>
   )
}

export default Form