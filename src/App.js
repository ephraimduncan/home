import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    console.log(
      '%cI ❤︎ you!',
      'background-color:white;padding:8px 16px;border-radius:8px;font-size:32px;color:red;'
    );
    console.log(
      "%c🦄: I'm a unicorn.",
      'background-color:white;padding:8px 16px;border-radius:8px;font-size:25px;color:#61dafb;'
    );
    console.log(
      '%c@dephraiim',
      'background-color:black;padding:8px 16px;border-radius:8px;font-size:25px;color:white;'
    );
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Ephraim Atta-Duncan </h2>
        <p>
          Artista, sin lienzo{' '}
          <span role='img' aria-label='color'>
            🎨
          </span>
        </p>
        <div className='App-links'>
          <a
            href='https://dev.to/dephraiim'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-dev fa-2x'></i>
          </a>
          <a
            href='https://github.com/dephraiim'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github fa-2x'></i>
          </a>
          <a
            href='https://twitter.com/dephraiim'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter fa-2x'></i>
          </a>
          <a
            href='https://www.youtube.com/channel/UCNm9DvW3gIEy_ANRjFV2Jxw?view_as=subscriber'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-youtube fa-2x'></i>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
