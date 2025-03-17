function changeContent(section) {
    const mainText = document.getElementById('mainText');
    const videoContainer = document.getElementById('video-container');
    const materialContainer = document.getElementById('material-container');
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');
    const content3 = document.getElementById('content3');

    videoContainer.style.display = 'none';
    materialContainer.style.display = 'none';

    switch (section) {
        case 'Home':
            content1.style.display = 'block';
            content2.style.display = 'block';
            content3.style.display = 'block';
            mainText.textContent = 'Это пример основного текста. Нажмите на ссылки в меню, чтобы изменить этот текст.';
            break;
        case 'Video':
            content1.style.display = 'none';
            content2.style.display = 'none';
            content3.style.display = 'none';
            mainText.textContent = '';
            videoContainer.style.display = 'block';
            break;
        case 'material':
            content1.style.display = 'none';
            content2.style.display = 'none';
            content3.style.display = 'none';
            mainText.textContent = '';
            materialContainer.style.display = 'block';
            break;
        default:
            content1.style.display = 'block';
            content2.style.display = 'block';
            content3.style.display = 'block';
            mainText.textContent = 'Это пример основного текста. Нажмите на ссылки в меню, чтобы изменить этот текст.';
    }

    translatePage();
}

function resetContent() {
    const mainText = document.getElementById('mainText');
    const videoContainer = document.getElementById('video-container');
    const materialContainer = document.getElementById('material-container');
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');
    const content3 = document.getElementById('content3');

    content1.style.display = 'block';
    content2.style.display = 'block';
    content3.style.display = 'block';
    mainText.textContent = 'Это пример основного текста. Нажмите на ссылки в меню, чтобы изменить этот текст.';
    videoContainer.style.display = 'none';
    materialContainer.style.display = 'none';

    translatePage();
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            this.textContent = '☀️'; 
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            this.textContent = '';
        }
    });

    let currentLanguage = 'pl'; // Устанавливаем польский язык по умолчанию

    document.getElementById('language-toggle').addEventListener('click', function() {
        if (currentLanguage === 'pl') {
            currentLanguage = 'ru';
            this.textContent = 'RU';
            translateToRussian();
        } else if (currentLanguage === 'ru') {
            currentLanguage = 'en';
            this.textContent = 'EN';
            translateToEnglish();
        } else {
            currentLanguage = 'pl';
            this.textContent = 'PL';
            translateToPolish();
        }
    });

    function translateToRussian() {
        document.getElementById('logo').textContent = 'Презентация';
        document.querySelector('nav a:nth-child(1)').textContent = 'Главная страница';
        document.querySelector('nav a:nth-child(2)').textContent = 'Видео';
        document.querySelector('nav a:nth-child(3)').textContent = 'Материалы';
        document.getElementById('mainText').textContent = 'Это пример основного текста. Нажмите на ссылки в меню, чтобы изменить этот текст.';
        document.getElementById('content1').textContent = 'Основной текст 1';
        document.getElementById('content2').textContent = 'Основной текст 2';
        document.getElementById('content3').textContent = 'Основной текст 3';
    }

    function translateToEnglish() {
        document.getElementById('logo').textContent = 'Presentation';
        document.querySelector('nav a:nth-child(1)').textContent = 'Home';
        document.querySelector('nav a:nth-child(2)').textContent = 'Video';
        document.querySelector('nav a:nth-child(3)').textContent = 'Materials';
        document.getElementById('mainText').textContent = 'This is an example main text. Click on the menu links to change this text.';
        document.getElementById('content1').textContent = 'Main text 1';
        document.getElementById('content2').textContent = 'Main text 2';
        document.getElementById('content3').textContent = 'Main text 3';
    }

    function translateToPolish() {
        document.getElementById('logo').textContent = 'Prezentacja';
        document.querySelector('nav a:nth-child(1)').textContent = 'Strona główna';
        document.querySelector('nav a:nth-child(2)').textContent = 'Video';
        document.querySelector('nav a:nth-child(3)').textContent = 'Materiały';
        document.getElementById('mainText').textContent = 'To jest przykładowy tekst główny. Kliknij linki w menu, aby zmienić ten tekst.';
        document.getElementById('content1').textContent = 'Główny tekst 1';
        document.getElementById('content2').textContent = 'Główny tekst 2';
        document.getElementById('content3').textContent = 'Główny tekst 3';
    }

    function translatePage() {
        if (currentLanguage === 'ru') {
            translateToRussian();
        } else if (currentLanguage === 'en') {
            translateToEnglish();
        } else {
            translateToPolish();
        }
    }
});
