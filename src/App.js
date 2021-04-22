import React, { useState, useEffect } from 'react'
import Header from "./components/ui/Header"
import CharacterGrid from "./components/characters/CharacterGrid"
import Search from "./components/ui/Search"

import './App.css';

function App() {
  const [items,setItems]=useState([])
  const [isLoaded, setIsLoaded] = useState(false);
  const [query, setQuery] = useState("");


  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters?name=${query}

    `)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        }
      
      )
  }, [query])
  console.log(items)
  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q)=>setQuery(q)}/>
      <CharacterGrid isLoaded={isLoaded} items={items}/>

    </div>
  );
}

export default App;
