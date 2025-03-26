const responses = {
    flirty: [
        "Just waiting for you to Confess. 😘",
        "You must be a WiFi signal, because I'm really feeling a strong connection. 😉",
        "I was blinded by your beauty… but I’m going to need your name for research purposes. 😍"
    ],
    funny: [
        "Are you French? Because Eiffel for you! 😂",
        "Are you a keyboard? Because you’re just my type. 😆",
        "You must be an alarm clock because you just woke up my heart. ⏰"
    ],
    angry: [
        "Oh, so now you wanna talk? 🙄",
        "I’m not mad… just waiting for my apology. 😤",
        "Congratulations, you just unlocked 'silent mode'. 📴"
    ],
    savage: [
        "Lemme frame this and put it in the museum of 'Not Impressed'. 😎",
        "You're like a cloud… beautiful but useless. 🌥️",
        "You bring everyone so much joy… when you leave the room. 🔥"
    ],
    cute: [
        "Are you a teddy bear? Because I wanna hug you forever! 🧸",
        "You must be a snowflake, because you make my heart melt. ❄️❤️",
        "Every time I see you, I smile like an idiot. 😊"
    ]
};

function generateReply() {
    let type = document.getElementById("responseType").value;
    let responseList = responses[type];
    let randomResponse = responseList[Math.floor(Math.random() * responseList.length)];

    let responseText = document.getElementById("responseText");
    responseText.innerHTML = "";
    
    
    let i = 0;
    function typeEffect() {
        if (i < randomResponse.length) {
            responseText.innerHTML += randomResponse.charAt(i);
            i++;
            setTimeout(typeEffect, 50); 
        } else {
            responseText.classList.remove("typing");
        }
    }

    responseText.classList.add("typing");
    typeEffect();
}
