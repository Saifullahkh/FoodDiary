import logo from './logo.svg';
import React, {useState, useEffect, createContext} from 'react'
import './App.css';
import axios from 'axios'
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Footer from './component/Footer';
import DetailPage from './page/DetailPage';
import ContentPage from './page/ContentPage';

export const RecipesContext = createContext()


function App() {
  const [products, setProduct] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

  const getData = () => {
    axios.get('https://dummyjson.com/recipes')
    .then((res) => {
      setProduct(res.data.recipes)
    })

  }

  useEffect(() => {
    getData()

  }, [])

  useEffect(() => {
    // Filter recipes based on search query
    if (searchQuery) {
      setFilteredProducts(
        products.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);


  return (
    <>
     <RecipesContext.Provider value={{ products: filteredProducts, setSearchQuery}}>  
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ContentPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/:id' element={<DetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
     </RecipesContext.Provider>
    
    </>
  );
}

export default App;
