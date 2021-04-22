import React, { useState } from 'react';

export default function Search({getQuery}) {
  const [text, setText] = useState('');
    onchange=(q)=>{

            setText(q)
            getQuery(q)
    }



  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={(e)=>onchange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
}
