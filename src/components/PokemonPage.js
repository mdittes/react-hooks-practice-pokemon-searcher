import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState(allPokemon)

  function handleSearch(e) {
    const filteredMons = allPokemon.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilteredPokemon(filteredMons)
  };

  useEffect(() => {
    setFilteredPokemon(allPokemon)
  }, [allPokemon]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(data => setAllPokemon(data))
  }, []);

  function addPokemon(newPokemon) {
    setAllPokemon([...allPokemon, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search handleSearch={handleSearch} />
      <br />
      <PokemonCollection allPokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
