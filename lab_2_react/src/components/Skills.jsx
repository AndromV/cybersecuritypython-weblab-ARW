function Skills() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md mb-6 border border-slate-100">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200 tracking-wide">
        Навички
      </h2>
      
      <ul className="flex flex-wrap gap-3">
        <li className="flex items-center gap-2.5 bg-slate-50 text-slate-800 px-4 py-2.5 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-sm transition-all duration-200">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          <span className="font-medium text-sm">Англійська мова</span>
          <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
            B2
          </span>
        </li>

        <li className="flex items-center gap-2.5 bg-slate-50 text-slate-800 px-4 py-2.5 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-sm transition-all duration-200">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          <span className="font-medium text-sm">Програмування на Python та C#</span>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
