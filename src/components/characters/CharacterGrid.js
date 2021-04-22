import React from 'react';
import CharacterItems from "./CharacterItems"

export default function CharacterGrid({ items, isLoaded }) {
  return isLoaded ? (
    <section className="cards">
      {items.map((e) => (
        <CharacterItems key={e.char_id} item={e}></CharacterItems>
      ))}
    </section>
  ) : (
    <h1>Loading...</h1>
  );
}
