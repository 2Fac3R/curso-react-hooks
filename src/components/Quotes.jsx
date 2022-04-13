import React, { useState, useEffect } from 'react'

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://animechan.vercel.app/api/quotes/anime?title=one+piece')
      .then(response => response.json())
      .then(data => setQuotes(data));
  }, [])

  return (
    <div className='quotes'>
      <h2>Quotes</h2>
      {quotes.map(quote => (
        <>
          <p key={quote.id}>{quote.character}</p>
          <q>{quote.quote}</q>
        </>
      ))}
    </div>
  )
}

export default Quotes;
