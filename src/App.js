import React from 'react';
// import Book from './components/Book';
import Home from './Home';
import Suppliers from './Suppliers';
import Categories from './Categories';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';


function App() {


    
    return (
        <div id="main-container">
            <Navbar/>

            <Routes>
                <Route path = "/" element={<Home/>} />
                <Route path ="/Categories" element={<Categories />} />
                <Route path = "/Suppliers" element={<Suppliers />}/> 
            </Routes>

        </div>
    );
}

export default App;
