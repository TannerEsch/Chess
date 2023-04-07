import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Auth} from './components/Auth'
import './index.css'

const App = () => {
  return (
    <div>
      <Auth/>
    </div>
  )
}

export default App