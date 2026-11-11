document.addEventListener('DOMContentLoaded', () => {

    const systemInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform || 'Невизначено',
        language: navigator.language,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        cookiesEnabled: navigator.cookieEnabled,
        collectedAt: new Date().toLocaleString('uk-UA')
    };

    localStorage.setItem('user_system_data', JSON.stringify(systemInfo));

    const storedData = JSON.parse(localStorage.getItem('user_system_data'));
    const systemInfoContainer = document.getElementById('system-info-content');

    if (storedData && systemInfoContainer) {
        systemInfoContainer.innerHTML = `
            <p><strong>ОС / Платформа:</strong> ${storedData.platform}</p>
            <p><strong>Браузер (User Agent):</strong> ${storedData.userAgent}</p>
            <p><strong>Мова системи:</strong> ${storedData.language}</p>
            <p><strong>Роздільна здатність екрана:</strong> ${storedData.screenWidth}x${storedData.screenHeight}</p>
            <p><strong>Час фіксації:</strong> ${storedData.collectedAt}</p>
        `;
    }

    const VARIANT_NUMBER = 9;
    const reviewsContainer = document.getElementById('reviews-container');

    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT_NUMBER}/comments`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Помилка мережі: ${response.status}`);
            }
            return response.json();
        })
        .then(comments => {
            reviewsContainer.innerHTML = '';

            comments.forEach(comment => {
                const card = document.createElement('article');
                card.className = 'card review-card';
                card.innerHTML = `
                    <h4>${comment.name}</h4>
                    <span class="author-email">${comment.email}</span>
                    <p>${comment.body}</p>
                `;
                reviewsContainer.appendChild(card);
            });
        })
        .catch(error => {
            if (reviewsContainer) {
                reviewsContainer.innerHTML = `<p style="color: #ef4444;">Не вдалося завантажити відгуки: ${error.message}</p>`;
            }
        });

    const modal = document.getElementById('feedbackModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    const MODAL_TIMEOUT_MS = 60000;

    setTimeout(() => {
        if (modal) {
            modal.classList.remove('hidden');
        }
    }, MODAL_TIMEOUT_MS);

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });

    const themeToggleBtn = document.getElementById('themeToggleBtn');

    function updateThemeButtonText(isDark) {
        if (themeToggleBtn) {
            themeToggleBtn.textContent = isDark ? '☀️ Денний режим' : '🌙 Нічний режим';
        }
    }

    const currentHour = new Date().getHours();
    const isDayTime = currentHour >= 7 && currentHour < 21;

    if (!isDayTime) {
        document.body.classList.add('dark-theme');
        updateThemeButtonText(true);
    } else {
        document.body.classList.remove('dark-theme');
        updateThemeButtonText(false);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDarkNow = document.body.classList.toggle('dark-theme');
            updateThemeButtonText(isDarkNow);
        });
    }
});
