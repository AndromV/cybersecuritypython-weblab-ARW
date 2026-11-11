import { useState, useEffect } from 'react';

function Copy() {
  const [systemInfo, setSystemInfo] = useState(null);

  useEffect(() => {
    const data = {
      userAgent: navigator.userAgent,
      platform: navigator.platform || 'Невизначено',
      language: navigator.language,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      collectedAt: new Date().toLocaleString('uk-UA'),
    };

    localStorage.setItem('react_system_data', JSON.stringify(data));

    const stored = JSON.parse(localStorage.getItem('react_system_data'));
    setSystemInfo(stored);
  }, []);

  return (
    <footer className="mt-8 border-t border-slate-200 dark:border-slate-800 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
      <p>&copy; 2026 Романюк Андрій. Усі права захищено.</p>

      {systemInfo && (
        <div className="mt-4 p-4 max-w-xl mx-auto text-left bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm text-xs leading-relaxed text-slate-600 dark:text-slate-300">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 border-b border-slate-100 dark:border-slate-800 pb-1">
            Інформація про систему (localStorage):
          </h4>
          <p><span className="font-medium text-slate-700 dark:text-slate-200">ОС / Платформа:</span> {systemInfo.platform}</p>
          <p className="break-all"><span className="font-medium text-slate-700 dark:text-slate-200">Браузер (User Agent):</span> {systemInfo.userAgent}</p>
          <p><span className="font-medium text-slate-700 dark:text-slate-200">Мова системи:</span> {systemInfo.language}</p>
          <p><span className="font-medium text-slate-700 dark:text-slate-200">Роздільна здатність:</span> {systemInfo.screenWidth}x{systemInfo.screenHeight}</p>
          <p><span className="font-medium text-slate-700 dark:text-slate-200">Час фіксації:</span> {systemInfo.collectedAt}</p>
        </div>
      )}
    </footer>
  );
}

export default Copy;
