 import React from 'react'
 
 import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './Componenets/Login'

//  import Login from './Components/Login'
//  import AppointmentList from './Components/AppointmentList'
//  import Report from './Components/Report'
 

 const App = () => {
   return (
     <div>
       
<h1>Hospital Management System </h1>

<BrowserRouter>
    <Routes>

      {/* <Route path='/' element={<Login/>} />  */}
         
         {/* <Route path="/" exact component={Login} /> */}
         <Route path="/" element={<Login/>}/>

         <Route path="/appointments" element={<AppointmentList/>}/>
         {/* <Route path="/appointments" component={AppointmentList}  /> */}

         <Route path="/report" element={<Report/>}/>
        {/* <Route path="/report" component={Report}/> */}


    </Routes>

</BrowserRouter>
 
     </div>
   )
 }
 
 
 export default App
 
