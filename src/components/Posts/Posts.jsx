const Posts = ({posts, removePost}) => {

   // console.log(posts)
   return(
      <div>
         {/* <h2>Posts</h2> */}
         {  
           posts.length > 0
           ? posts.map(item => {
              return <div key={item.id}>
                 <div>{item.text}</div>
                 <div className='image-wrap'>
                     <img src={item.imageURL} alt="" />
                 </div>
                 <button onClick={() => removePost(item.id)}>удалить</button>
              </div>
           }) 
           : null
         }
      </div>
   )
}

export default Posts