document.addEventListener("DOMContentLoaded", () => {
    const languageIcon = document.getElementById('languageIcon'); // 获取图标
    const languageParts = document.querySelector('.language-parts'); // 获取语言栏
    const languageOptions = document.querySelectorAll(".language-option"); // 获取语言选项

    let isVisible = false; // 控制显示状态

    // 点击语言图标切换显示状态
    languageIcon.addEventListener('click', (event) => {
        isVisible = !isVisible; // 切换状态
        languageParts.classList.toggle('show', isVisible); // 控制显示动画
        event.stopPropagation(); // 阻止事件冒泡
    });

    // 鼠标移开时隐藏语言栏
    languageIcon.addEventListener('mouseleave', () => {
        languageParts.classList.remove('show'); // 隐藏语言栏
        isVisible = false; // 更新状态
    });

    // 鼠标移开语言栏时隐藏
    languageParts.addEventListener('mouseleave', () => {
        languageParts.classList.remove('show'); // 隐藏语言栏
        isVisible = false; // 更新状态
    });

    // 定义语言文本内容
    const languageTexts = {
        cn: ["欢迎来到我的博客！", "我是涼月七笠，", "一名AI 架构师和算法工程师", "你需要什么？"],
        en: ["Welcome to My Blog!", "I'm NanagasaSuzutsuki,", "an AI architect and algorithm engineer", "What do you want?"],
        de: ["Willkommen auf meinem Blog!", "Ich bin NanagasaSuzutsuki,", "ein KI-Architekt und Algorithmus-Ingenieur", "Was brauchst du?"]
    };

    // 更新语言内容
    function updateTextContent(language) {
        const texts = languageTexts[language];
        const container = document.querySelector(".typing-text-container");
        container.innerHTML = ""; // 清空原有内容

        texts.forEach((text, index) => {
            const tag = document.createElement(index === 0 ? "h1" : `h${index + 1}`);
            tag.textContent = text;
            container.appendChild(tag);
        });
    }

    // 切换语言并隐藏菜单
    languageOptions.forEach(option => {
        option.addEventListener("click", (event) => {
            const selectedLanguage = event.target.id === "gb" ? "en" : event.target.id;
            updateTextContent(selectedLanguage); // 更新语言
            languageParts.classList.remove('show'); // 隐藏语言栏
            isVisible = false; // 重置状态
        });
    });

    // 默认加载英文
    updateTextContent("en");
});
