import { useState } from 'react';
import './App.css';

import React from 'react';
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from "./Router";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer position="top-right" />
      <Router />
    </>
  )
}

export default App
