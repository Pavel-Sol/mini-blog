import { useState, useEffect } from 'react'

import {database, storage} from './../../firebaseConfig'
import Form from './../../components/Form/Form'
import CardList from './../../components/CardList/CardList'



const Blog = () => {

   return (
     <div>
        <Form />
        <CardList />
     </div>
   )
}

export default Blog