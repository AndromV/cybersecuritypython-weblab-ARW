import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import Copy from './components/Copy';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    const isDay = currentHour >= 7 && currentHour < 21;
    setTheme(isDay ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 font-sans text-slate-800 antialiased transition-colors duration-300">
      <main className="max-w-4xl mx-auto">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Reviews />
        <Copy />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
