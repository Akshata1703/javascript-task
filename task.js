let fortunes = [" He decided to travel, and his fortune turned for the worse.",
"The purpose of our lives is to be happy.",
"Get busy living or get busy dying.",
"Life is what happens when you're busy making other plans." ,
"You only live once, but if you do it right, once is enough." ,
"Turn your wounds into wisdom."
]

let button = document.getElementById('btn');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
    let random = Math.floor(Math.random() * fortunes.length);
    return fortunes[random];
}

function fortuneShow(){
    fortune.innerHTML = fortuneSelector();
    button.innerHTML = "Come Back";
    button.style.cursor = 'default';

button.removeEventListener('click',fortuneShow);
}
button.addEventListener('click', fortuneShow)