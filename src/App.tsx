import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Auth} from './components/Auth'
import { Home } from './pages';
import { db } from './config/firebase';
import { getDocs, collection } from "firebase/firestore";
import './index.css'

const App = () => {
  const [gameList , setGameList] = useState([])
  const gameCollectionRef = collection(db, 'Game')
  
    useEffect(() => {
      const getGames = async () => {
        try{
          const data = await getDocs(gameCollectionRef)
          const filteredData = data.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
          }))
          console.log(filteredData)
        }catch (error){
          console.error(error)
        }
      };

      getGames()
    }, [])


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App