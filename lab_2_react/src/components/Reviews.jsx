import { useState, useEffect } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const VARIANT = 9;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Помилка мережі: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-white p-6 rounded-xl shadow-md mb-6 border border-slate-100">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200 tracking-wide">
        Відгуки попередніх роботодавців
      </h2>

      {loading && (
        <p className="text-slate-500 text-sm">Завантаження відгуків із сервера...</p>
      )}

      {error && (
        <p className="text-red-500 text-sm">Не вдалося завантажити відгуки: {error}</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((comment) => (
            <article
              key={comment.id}
              className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-base font-semibold text-slate-900 leading-snug mb-1">
                {comment.name}
              </h3>
              <a
                href={`mailto:${comment.email}`}
                className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline block mb-2 break-all"
              >
                {comment.email}
              </a>
              <p className="text-slate-600 text-sm leading-relaxed">
                {comment.body}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;
