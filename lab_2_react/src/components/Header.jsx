function Header({ theme, toggleTheme }) {
  return (
    <header className="relative bg-slate-900 text-white p-8 rounded-2xl shadow-xl mb-6 text-center border-b-4 border-blue-500">
      <button
        type="button"
        onClick={toggleTheme}
        className="sm:absolute top-4 right-4 mb-4 sm:mb-0 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 transition-all duration-200 cursor-pointer"
      >
        {theme === 'dark' ? '☀️ Денний режим' : '🌙 Нічний режим'}
      </button>

      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
        Романюк Андрій Володимирович
      </h1>
      <p className="text-lg text-blue-400 font-medium mb-4">
        Студент університету "Львівська Політехніка"
      </p>
      
      <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-slate-300">
        <span className="flex items-center gap-1">
          <span className="text-slate-400">Email:</span>
          <a 
            href="mailto:andrii.romaniuk.kb.2025@lpnu.ua"
            className="text-white hover:text-blue-400 underline decoration-blue-500/60 hover:decoration-blue-400 underline-offset-4 transition-colors duration-200"
          >
            andrii.romaniuk.kb.2025@lpnu.ua
          </a>
        </span>
        <span className="hidden sm:inline text-slate-600">|</span>
        <span>
          <span className="text-slate-400">Телефон:</span> +380683604561
        </span>
      </div>
    </header>
  );
}

export default Header;
