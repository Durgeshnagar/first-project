import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import Home from './components/Home';

import Login from './components/Login';

import Products from './components/Products';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React from "react";
import './App.css';
import Information from './components/Information';
import Register from './components/Register';


function App() {
    return (

        <BrowserRouter>
            <div>
                {/* <Sidebar /> */}
                < Navbar />
                
                <div className='app'>
                    <Routes>

                    {/* <Route path="/detailpage" element={<DetailsPage />} /> */}
                        <Route path="/Products" element={<Products />} />
                        <Route path="/register/" element={<Register />} />
                                <Route path="/login" element={<Login />}/>
                        <Route path="//" element={<Home />} />
                              <Route path="/Information/" element={<Information/>}/>
                                     


                    </Routes>


                </div>
            </div>





        </BrowserRouter>


    );

}
export default App;