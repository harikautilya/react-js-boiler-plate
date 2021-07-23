import React from 'react';
import logo from '@assets/logo.svg';
import { appStyles } from '@styles';

function App() {
  return (
    <div className={appStyles.App}>
      <header className={appStyles.App_header}>
        <img src={logo} className={appStyles.App_logo} alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className={appStyles.App_link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export { App };
