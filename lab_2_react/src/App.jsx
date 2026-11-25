import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import Copy from './components/Copy';
import ContactForm from './components/ContactForm';

const navItems = [
  { href: '#about', label: 'Про мене' },
  { href: '#skills', label: 'Навички' },
  { href: '#education', label: 'Освіта' },
  { href: '#experience', label: 'Досвід' },
  { href: '#reviews', label: 'Відгуки' },
];

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

        <nav
          aria-label="Навігація по розділах резюме"
          className="sticky top-4 z-30 mb-6 flex flex-wrap justify-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-blue-600 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div id="about" className="scroll-mt-20">
          <About />
        </div>
        <div id="skills" className="scroll-mt-20">
          <Skills />
        </div>
        <div id="education" className="scroll-mt-20">
          <Education />
        </div>
        <div id="experience" className="scroll-mt-20">
          <Experience />
        </div>
        <div id="reviews" className="scroll-mt-20">
          <Reviews />
        </div>

        <Copy />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
