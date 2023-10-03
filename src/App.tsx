import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import HomePage from "../src/components/home/HomePage"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="users/:id" element={<Users />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
