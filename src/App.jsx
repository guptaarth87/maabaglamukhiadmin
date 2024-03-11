import { useState } from 'react'

import './App.css'
import AddMenuForm from './Components/AddMenuForm/AddMenuForm'
import {Route , Routes} from 'react-router-dom'
import CategoryPage from './Pages/CategoryPage'
import MenuPage from './Pages/MenuPage'
import SubCategoryPage from './Pages/SubCategoryPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<CategoryPage/>}/>
      <Route path='/menu' element={<MenuPage/>}/>
      <Route path='/subcategories' element={<SubCategoryPage/>}/>
    </Routes>
    
    </>
  )
}

export default App
