

const Post = ({imageURL, text, id, removePost}) => {
   return(
      <div className='col-sm-3 mt-2 mb-3'>
         <div className='card'>
            <img src={imageURL} className="card-img-top card-img" />
            <div className="card-body">
               <p className="card-text">{text}</p>
            </div>
            <button className='btn btn-danger'
            onClick={() => removePost(id)}>УДАЛИТЬ</button>
         </div>
   </div> 
   )
}

export default Post