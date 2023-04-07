import React, {useState, useEffect, useContext} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Auth} from './components'
import { Navbar } from './navigation';
import { Home, Play } from './pages';
import { db } from './config/firebase';
import { getDocs, collection } from "firebase/firestore";
import './index.css'

export const DataContext = React.createContext({});

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
        }catch (error){
          console.error(error)
        }
      };

      getGames()
    }, [])


  return (
    <>
    <DataContext.Provider value={{ gameList, setGameList}}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Play" element={<Play />} />
        </Routes>
      </BrowserRouter>
      </DataContext.Provider>
    </>
  )
}

export default App