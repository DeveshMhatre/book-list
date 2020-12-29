import React from 'react';
import { useState } from 'react';

import Header from './Header';
import ReadingList from './ReadingList';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const themeSwitch = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    // When <main>'s class changes from dark to light and vice versa,
    // color variables change for everything inside of <main>
    <main className={`app ${theme}`}>
      <Header handleClick={themeSwitch} />
      <ReadingList />
    </main>
  );
}

export default App;
