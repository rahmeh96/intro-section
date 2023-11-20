
import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";

//import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
//import LoginForm from "./LoginForm";
//import './App.css';
//import RootLayout from "./RootLayout";



  
  /*const router= createBrowserRouter(
    createRoutesFromElements(
        <Route>
        <Route path="/" element={<RootLayout/>}/>
             <Route path="NavBar" element={<NavBar/>}/>
         <Route path="Main" element={<Main/>}/>
         <Route path="LoginForm" element={<LoginForm/>}/>
        <RouterProvider router={router}/>
         </Route>
    )
)*/
const App = () => {
 
    return ( 
        <>
        <NavBar/>
        <Main/>
       
        </>
     );
}
    export default App;
 

