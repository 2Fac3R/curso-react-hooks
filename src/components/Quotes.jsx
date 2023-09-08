import React, { useState, useEffect } from 'react';

const url = '';
const options = '';

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  }, []);

  return (
    <div className="quotes">
      <h2>Quotes</h2>
      {quotes.map((quote) => (
        <div className="quotes-item" key={quote.id}>
          <p>{quote.character}</p>
          <q>{quote.quote}</q>
        </div>
      ))}
    </div>
  );
}
