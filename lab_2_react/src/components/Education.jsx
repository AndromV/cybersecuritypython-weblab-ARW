function Education() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md mb-6 border border-slate-100">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200 tracking-wide">
        Освіта
      </h2>
      
      <article className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-600 hover:bg-slate-100/80 transition-colors duration-200">
        <h3 className="text-lg font-semibold text-slate-900">
          Національний університет "Львівська Політехніка"
        </h3>
        <p className="text-slate-600 text-sm mt-1">
          Кібербезпека та захист інформації (2025–2027)
        </p>
      </article>
    </section>
  );
}

export default Education;
