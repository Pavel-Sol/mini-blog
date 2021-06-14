const Posts = ({posts}) => {

   console.log(posts)
   return(
      <div>
         <h2>Posts</h2>
         {  
           posts.length > 0
           ? posts.map(item => {
              return <div>
                 <div>{item.text}</div>
                 <div className='image-wrap'>
                     <img src={item.imageURL} alt="" />
                 </div>
              </div>
           }) 
           : null
         }
      </div>
   )
}

export default Posts