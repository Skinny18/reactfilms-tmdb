import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//Components
import Movie from './pages/Movie.jsx';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';

//React Router Dom
import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path='/' element={<Home/>} />
        <Route path='movie/:id' element={<Movie/>} />
        <Route path='search' element={<Search/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
