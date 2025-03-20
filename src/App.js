import logo from './logo.svg';
import './App.css';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Events } from './learning/Events';
import { createContext, useState } from 'react';


export let Context=createContext(); // create in any module, export from there




function App() {
  const [mainHeading, setHeading]=useState("BOOK MANAGEMENT");
  const [libraryName, setName]=useState("Neosoft")

  setTimeout(()=>{
   setName("Shanti");
   setHeading("BOOKS LIBRARY")
  },3000)


  return (
    <>
          <h3>{mainHeading}, {libraryName}</h3>
          <Context value={libraryName}>
            <Header mainHeading={mainHeading} xyz="xyz"></Header>
            <Events></Events> 
            <Footer mainHeading={mainHeading}  xyz="xyz"></Footer>
          </Context>
    </>

  );
}

export default App;
