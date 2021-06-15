import { useState, useEffect} from 'react'

import {database, storage} from './../../firebaseConfig'
import Form from './../../components/Form/Form'
import Posts from '../../components/Posts/Posts'
import MainLoader from './../../components/Loaders/MainLoader'



const Blog = () => {
   const [inputText, setInputText] = useState('')
   const [selectedFile, setSelectedFile] = useState('');
   const [posts, setPosts] = useState([])
   const [isMainLoader, setIsMainLoader] = useState(true)

   const handleTextInput = (e) => {
      setInputText(e.target.value)
   }

   const handleFiletInput = (e) => {
      setSelectedFile(e.target.files[0])
   }

   const sendPost = (e) => {
      e.preventDefault()

      let storageRef = storage.ref(`images/${selectedFile.name}`);
      let uploadTask = storageRef.put(selectedFile);


      uploadTask.on(
         'state_changed',
         (snapshot) => {
           var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           console.log('Upload is ' + progress + '% done');
         },
         (error) => {
           if (error) {
             console.log(error.message);
           }
         },
         () => {
           uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
             database.ref('blogs/')
               .push()
               .set(
                 {
                   text: inputText,
                   imageURL: downloadURL,
                 },
                 (err) => {
                   if (err) {
                     alert('ошибка загрузки');
                     setInputText('')
                     e.target.reset()
                   } else {
                     alert('фото загружено');
                     setInputText('')
                     e.target.reset()
                     getPosts()
                   }
                 },
               );
           });
         },
       );
   }


   useEffect(() => {
    getPosts()
   }, [])

   const getPosts = () => {
     database
    .ref('blogs/')
    .once('value')
    .then((snapshot) => {
      const data = snapshot.val();
      const dataArr = []
      for (let key in data) {
         let item = data[key]
         dataArr.push({ ...item, id: key })
      }
      
      setPosts(dataArr.reverse())
      setIsMainLoader(false)
    })
   }

   const removePost = (id) => {
      database
         .ref('blogs/' + id)
         .remove();
      getPosts();
   }

   return (
     <div>
        <Form 
        inputText={inputText}
        handleTextInput={handleTextInput}
        handleFiletInput={handleFiletInput}
        sendPost={sendPost}/>
         {
          isMainLoader && <MainLoader/>
        }
        <Posts
        removePost={removePost}
        posts={posts} />
     </div>
   )
}

export default Blog