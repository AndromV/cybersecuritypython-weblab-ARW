import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Copy from './components/Copy';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6 lg:px-8 font-sans text-slate-800 antialiased">
      <main className="max-w-4xl mx-auto">
        <Header />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Copy />
      </main>
    </div>
  );
}

export default App;