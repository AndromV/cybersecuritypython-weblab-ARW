function Experience() {
  const projects = [
    {
      title: "Програма валідації паролю на C#",
      desc: "Самостійно створено алгоритм перевірки паролю за вказаними у вимогах критеріями.",
      tech: "C#"
    },
    {
      title: "Програма для роботи з базою даних на Python",
      desc: "Створено алгоритми для зчитування, редагування, виведення й збереження даних та зведено алгоритми у суцільну програму.",
      tech: "Python / SQL"
    },
    {
      title: "Програма для авторизації на Python",
      desc: "Створено систему збереження логінів, алгоритми хешування паролів і валідації паролю й логіну та аналізу їх надійності.",
      tech: "Python / Security"
    },
    {
      title: "Програма для читання вебсторінок у C#",
      desc: "Створено структуру браузера програми, алгоритми читання та виведення сторінки.",
      tech: "C# / Web"
    }
  ];

  return (
    <section className="bg-white p-6 rounded-xl shadow-md mb-6 border border-slate-100">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200 tracking-wide">
        Досвід роботи / Проєкти
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <article
            key={index}
            className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:bg-white hover:shadow-lg hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-base font-semibold text-slate-900 leading-snug">
                {project.title}
              </h3>
              <span className="shrink-0 text-xs font-semibold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                {project.tech}
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {project.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
