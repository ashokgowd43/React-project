 import React from 'react'
 import Amazon from './Amazon'
 import Cards from './Cards'
 import Carous from './Carous'
 import { BrowserRouter,Routes,Route } from 'react-router-dom'
 import Maincard from './Maincard'
 import Footer from './Footer'
import Buynow from './Buynow'
import Addcard from './Addcard'
 
 function App() {
   return (
 
     
      
      <BrowserRouter>
      <Amazon/>
      <Carous/>
      <Routes>
      
        <Route path='' exact element={<Cards/>}></Route>       
        <Route path='main' exact element={<Maincard/>}></Route>
        <Route path='buy' exact element={<Buynow/>}></Route>
        <Route path='add' exact element={<Addcard/>}></Route>
        
      </Routes>
      <Footer/>

       
      </BrowserRouter>
    
   )
 }
 
 export default App