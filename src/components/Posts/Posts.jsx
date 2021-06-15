import Post from './../Post/Post'

const Posts = ({posts, removePost}) => {

   return(
      <div className='row mt-4'>
         {  
           posts.length > 0
           ? posts.map(item => {
              return <Post
               id ={item.id}
               imageURL ={item.imageURL}
               text ={item.text}
               removePost={removePost}
               key={item.id}/> 
           }) 
           : null
         }
      </div>
   )
}

export default Posts