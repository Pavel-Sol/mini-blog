import { useState, useEffect} from 'react'

import {database, storage} from './../../firebaseConfig'
import Form from './../../components/Form/Form'
import CardList from './../../components/CardList/CardList'



const Blog = () => {
   const [inputText, setInputText] = useState('')
   const [selectedFile, setSelectedFile] = useState('');

   const handleTextInput = (e) => {
      setInputText(e.target.value)
   }

   const handleFiletInput = (e) => {
      setSelectedFile(e.target.files[0])
      // console.log(e.target.value)
   }

   const sendPost = (e) => {
      e.preventDefault()
      // console.log(selectedFile)

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
                   }
                 },
               );
           });
         },
       );
       
      console.log(e)
   }

   return (
     <div>
        <Form 
        inputText={inputText}
        handleTextInput={handleTextInput}
        handleFiletInput={handleFiletInput}
        sendPost={sendPost}/>
        <CardList />
     </div>
   )
}

export default Blog