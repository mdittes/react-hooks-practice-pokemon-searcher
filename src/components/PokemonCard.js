import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( {pokemon} ) {
  const [isFront, setIsFront] = useState(true)

  function handleClick() {
    setIsFront((isFront) => !isFront)
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div id={pokemon.id} className="image">
          <img src={isFront ? pokemon.sprites.front : pokemon.sprites.back} alt={pokemon.name} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
