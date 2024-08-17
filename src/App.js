import React from 'react';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ListView from './pages/ListView';
import DetailView from './pages/DetailView';
import CreatePost from './pages/CreatePost';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="main-content">
                <Routes>
                    <Route exact path="/" element={<ListView/>} />
                    <Route path="/posts/:id" element={<DetailView/>} />
                    <Route path="/create" element={<CreatePost/>} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
