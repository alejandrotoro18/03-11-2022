import React from "react";
import "./style.css";
import{useState} from "react";
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
   
    <div>
      <h1>Api</h1>
      <p > Ricky & Morty</p>
      < character/>
      <img src= "https://raw.githubusercontent.com/ratasi/rick-morty/master/src/img/rick-morty.png"width="900"
     height="500" ></img>
     
     <button onClick={reqApi} className="btn-search" >Buscar Personajes..</button>
    </div>
  );
}
