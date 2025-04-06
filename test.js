document.addEventListener("DOMContentLoaded", function() {
    const section1 = document.querySelector(".section1");
    const section2 = document.querySelector(".section2");
    const section3 = document.querySelector(".section3");
    const section4 = document.querySelector(".section4");
    const nextButton = document.getElementById("NextButton");
    const nextButton2 = document.getElementById("NextButton2");
    const nextButton3 = document.getElementById("NextButton3");
    const nextButton4 = document.getElementById("NextButton4");
    const backButton2 = document.getElementById("BackButton2");
    const backButton3 = document.getElementById("BackButton3");
    const backButton4 = document.getElementById("BackButton4");
    const video1Button = document.getElementById('video1Button');
    const burzeVideo = document.getElementById('burze-video');
    const video2Button = document.getElementById('video2Button');
    const Powodzvideo = document.getElementById('Powodz-video');

    
    
    // Скрыть section2, section3, section4 при загрузке страницы
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";

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

});
