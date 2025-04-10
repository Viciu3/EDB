document.addEventListener("DOMContentLoaded", function() {
    const section1 = document.querySelector(".section1");
    const section2 = document.querySelector(".section2");
    const section3 = document.querySelector(".section3");
    const section4 = document.querySelector(".section4");
    const section5 = document.querySelector(".section5");
    const section6 = document.querySelector(".section6");
    const section7 = document.querySelector(".section7");
    const section8 = document.querySelector(".section8");
    const nextButton = document.getElementById("NextButton");
    const nextButton2 = document.getElementById("NextButton2");
    const nextButton3 = document.getElementById("NextButton3");
    const nextButton4 = document.getElementById("NextButton4");
    const nextButton5 = document.getElementById("NextButton5");
    const nextButton6 = document.getElementById("NextButton6");
    const nextButton7 = document.getElementById("NextButton7");
    const backButton2 = document.getElementById("BackButton2");
    const backButton3 = document.getElementById("BackButton3");
    const backButton4 = document.getElementById("BackButton4");
    const backButton5 = document.getElementById("BackButton5");
    const backButton6 = document.getElementById("BackButton6");
    const backButton7 = document.getElementById("BackButton7");
    const backButton8 = document.getElementById("BackButton8");
    const video1Button = document.getElementById('video1Button');
    const burzeVideo = document.getElementById('burze-video');
    const video2Button = document.getElementById('video2Button');
    const Powodzvideo = document.getElementById('Powodz-video');
    const video3Button = document.getElementById('video3Button');
    const Khalivideo = document.getElementById('Khali-video');
    const video4Button = document.getElementById('video4Button');
    const SZCZEKOCINAMI = document.getElementById('SZCZEKOCINAMI-video');
    const video5Button = document.getElementById('video5Button');
    const Pozary = document.getElementById('Pożary-video');
    
    // Скрыть section2, section3, section4 при загрузке страницы
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "none";
    section8.style.display = "none";

    // Показать section2 и скрыть section1 при нажатии на NextButton
    nextButton.addEventListener("click", function() {
        section1.style.display = "none";
        section2.style.display = "block";
    });
    
    // Показать section3 и скрыть section2 при нажатии на NextButton2
    nextButton2.addEventListener("click", function() {
        section2.style.display = "none";
        section3.style.display = "block";
    });
    
    // Показать section4 и скрыть section3 при нажатии на NextButton3
    nextButton3.addEventListener("click", function() {
        section3.style.display = "none";
        section4.style.display = "block";
    });
    
    // Показать section5 и скрыть section4 при нажатии на NextButton4
    nextButton4.addEventListener("click", function() {
        section4.style.display = "none";
        section5.style.display = "block";
    });
    
    // Показать section6 и скрыть section5 при нажатии на NextButton5
    nextButton5.addEventListener("click", function() {
        section5.style.display = "none";
        section6.style.display = "block";
    });
    
    // Показать section7 и скрыть section6 при нажатии на NextButton6
    nextButton6.addEventListener("click", function() {
        section6.style.display = "none";
        section7.style.display = "block";
    });
    
    // Показать section8 и скрыть section7 при нажатии на NextButton7
    nextButton7.addEventListener("click", function() {
        section7.style.display = "none";
        section8.style.display = "block";
    });
    
    // Показать section1 и скрыть section2 при нажатии на BackButton2
    backButton2.addEventListener("click", function() {
        section2.style.display = "none";
        section1.style.display = "flex"; // Восстанавливаем display: flex;
    });
    
    // Показать section2 и скрыть section3 при нажатии на BackButton3
    backButton3.addEventListener("click", function() {
        section3.style.display = "none";
        section2.style.display = "block"; // Восстанавливаем display: flex;
    });
    
    // Показать section3 и скрыть section4 при нажатии на BackButton4
    backButton4.addEventListener("click", function() {
        section4.style.display = "none";
        section3.style.display = "block"; // Восстанавливаем display: flex;
    });
    
    // Показать section4 и скрыть section5 при нажатии на BackButton5
    backButton5.addEventListener("click", function() {
        section5.style.display = "none";
        section4.style.display = "block"; // Восстанавливаем display: flex;
    });
    
    // Показать section5 и скрыть section6 при нажатии на BackButton6
    backButton6.addEventListener("click", function() {
        section6.style.display = "none";
        section5.style.display = "block"; // Восстанавливаем display: flex;
    });

    // Показать section6 и скрыть section7 при нажатии на BackButton7
    backButton7.addEventListener("click", function() {
        section7.style.display = "none";
        section6.style.display = "block"; // Восстанавливаем display: flex;
    });
    
    // Показать section7 и скрыть section8 при нажатии на BackButton8
    backButton8.addEventListener("click", function() {
        section8.style.display = "none";
        section7.style.display = "block"; // Восстанавливаем display: flex;
    });
    
    // Добавьте обработчики событий для других кнопок (NextButton(n) ,BackButton(n))
    // если вам нужно переключаться между секциями

    // Добавляем обработчик для video1Button
    video1Button.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки
        if (burzeVideo.style.display === 'none') {
            burzeVideo.style.display = 'block'; // Показываем видео
        } else {
            burzeVideo.style.display = 'none'; // Скрываем видео
        }
    });
    
    // Добавляем обработчик для video2Button
    video2Button.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки
        if (Powodzvideo.style.display === 'none') {
            Powodzvideo.style.display = 'block'; // Показываем видео
        } else {
            Powodzvideo.style.display = 'none'; // Скрываем видео
        }
    });
    
    // Добавляем обработчик для video3Button
    video3Button.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки
        if (Khalivideo.style.display === 'none') {
            Khalivideo.style.display = 'block'; // Показываем видео
        } else {
            Khalivideo.style.display = 'none'; // Скрываем видео
        }
    });

    // Добавляем обработчик для video4Button
    video4Button.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки
        if (SZCZEKOCINAMI.style.display === 'none') {
            SZCZEKOCINAMI.style.display = 'block'; // Показываем видео
        } else {
            SZCZEKOCINAMI.style.display = 'none'; // Скрываем видео
        }
    });
    
    // Добавляем обработчик для video5Button
    video5Button.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки
        if (Pozary.style.display === 'none') {
            Pozary.style.display = 'block'; // Показываем видео
        } else {
            Pozary.style.display = 'none'; // Скрываем видео
        }
    });
    
});
