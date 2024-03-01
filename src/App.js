import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import React, { Component } from 'react'

import Home from './components/home'
import Fact1 from './components/fact1'
import Fact2 from './components/fact2'
import Fact3 from './components/fact3'
// import image from './charlie.jpg'
export class App extends Component {
  render() {
    return (
<BrowserRouter>

      <Navbar />
      <Routes>
        <Route path = "/fact1" element = {<Fact1 />} />
        <Route path = "/fact2" element = {<Fact2 />} />
        <Route path = "/fact3" element = {<Fact3 />} />
        <Route path = "/" element = {<Home />} />

      </Routes>


     </BrowserRouter>
     
    )
  }
}


export default App


