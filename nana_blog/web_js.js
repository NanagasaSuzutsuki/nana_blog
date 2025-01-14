document.addEventListener("DOMContentLoaded", () => {
    const languageIcon = document.getElementById('languageIcon'); 
    const languageParts = document.querySelector('.language-parts'); 
    const languageOptions = document.querySelectorAll(".language-option"); 
    let isVisible = false; 
    languageIcon.addEventListener('click', (event) => {
        isVisible = !isVisible; 
        languageParts.classList.toggle('show', isVisible); 
        event.stopPropagation(); 
    });
    languageIcon.addEventListener('mouseleave', () => {
        languageParts.classList.remove('show'); 
        isVisible = false; 
    });
    languageParts.addEventListener('mouseleave', () => {
        languageParts.classList.remove('show'); 
        isVisible = false; 
    });
    const languageTexts = {
        cn: ["欢迎来到我的博客！", "我是涼月七笠，", "一名AI 架构师和算法工程师", "你需要什么？"],
        en: ["Welcome to My Blog!", "I'm NanagasaSuzutsuki,", "an AI architect and algorithm engineer", "What do you want?"],
        de: ["Willkommen auf meinem Blog!", "Ich bin NanagasaSuzutsuki,", "ein KI-Architekt und Algorithmus-Ingenieur", "Was brauchst du?"]
    };
    function updateTextContent(language) {
        const texts = languageTexts[language];
        const container = document.querySelector(".typing-text-container");
        container.innerHTML = ""; 
        texts.forEach((text, index) => {
            const tag = document.createElement(index === 0 ? "h1" : `h${index + 1}`);
            tag.textContent = text;
            container.appendChild(tag);
        });
    }
    languageOptions.forEach(option => {
        option.addEventListener("click", (event) => {
            const selectedLanguage = event.target.id === "gb" ? "en" : event.target.id;
            updateTextContent(selectedLanguage); 
            languageParts.classList.remove('show');
            isVisible = false; 
        });
    });
    updateTextContent("en");
});
