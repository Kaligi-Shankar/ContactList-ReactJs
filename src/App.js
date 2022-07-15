import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Homes from './Homes'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Homes/>} />
      
    </Routes>
    </BrowserRouter>
    
    
    
  )
}

export default App