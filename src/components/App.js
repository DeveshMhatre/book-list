import React from 'react';
import { useEffect, useState } from 'react';

import Header from './Header';
import ReadingList from './ReadingList';

const App = () => {
  // Store previously selected theme, if any present in localStorage
  // Else assign light theme
  const [theme, setTheme] = useState(() => {
    const oldTheme = localStorage.getItem('theme');
    return oldTheme !== null ? oldTheme : 'light';
  });

  const themeSwitch = () => {
    // Update localStorage when theme is changed
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    // When <main>'s class changes from dark to light and vice versa,
    // color variables change for everything inside of <main>
    <main
      className={`app ${theme}`}>
      <Header
        theme={theme}
        handleClick={themeSwitch} />
      <ReadingList />
    </main>
  );
}

export default App;
