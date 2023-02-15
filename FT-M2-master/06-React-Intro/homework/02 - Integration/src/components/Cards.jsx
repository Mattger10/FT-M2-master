import React from 'react';
import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {characters.map(character => (
            <Card
               name={character.name}
               image={character.image}
               species={character.species}
               status={character.status}
               />
            ))}
      </div>
      );
}
