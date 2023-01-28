import React from "react";
import "./style.css";
import{useState} from "react";
import Characters from "../src/components/caracter";
export default function App() {

  const[characters, setCharacters]= useState(null);
  
  const reqApi = async() =>{
  const api= await fetch("https://rickandmortyapi.com/api/character")
  const characterApi = await api.json();
   setCharacters(characterApi.results);
    console.log(characterApi);
    console.log(characters);
  };
  return (
   
    <div className= "App">
      <header className="App-header">
      <h1 className="title">Ricky & Morty</h1>
      
      {characters ? (
        <Characters characters={characters}/>
      ) :(
      <>
      <img src= "https://raw.githubusercontent.com/ratasi/rick-morty/master/src/img/rick-morty.png"width="900"
     height="500" >

     </img>
     
     <button onClick={reqApi} className="btn-search" >Buscar Personajes..</button>
   
      </>
      )}
      < Characters/>
      </header>
      </div>
  
  );
}
export default App;