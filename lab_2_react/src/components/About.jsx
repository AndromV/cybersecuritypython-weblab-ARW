function About() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md mb-6 border border-slate-100">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200 tracking-wide">
        Про мене
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-sm">
        <p className="text-slate-600">
          <span className="font-semibold text-slate-800">Дата народження:</span> 25.03.2008
        </p>
        <p className="text-slate-600">
          <span className="font-semibold text-slate-800">Стать:</span> чоловіча
        </p>
        <p className="text-slate-600">
          <span className="font-semibold text-slate-800">Національність:</span> українець
        </p>
        <p className="text-slate-600">
          <span className="font-semibold text-slate-800">Місто проживання:</span> Львів, Львівська обл.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-500">
        <p className="text-slate-700 leading-relaxed text-sm">
          Студент спеціальності "Кібербезпека та захист інформації". 
          Розумію принципи безпечної передачі даних, маю навички роботи з Git, Python та C#, MySQL та базовим веброзробленням. 
          Мотивований застосувати знання стандартів безпеки для практичних задач.
        </p>
      </div>
    </section>
  );
}

export default About;
