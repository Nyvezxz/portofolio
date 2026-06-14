console.log("Portfolio Loaded");

// Efek muncul saat scroll nanti bisa ditambah di sini

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

    nav.style.background =
    "rgba(15,23,42,.8)";

    nav.style.boxShadow =
    "0 10px 40px rgba(14,165,233,.15)";

}else{

    nav.style.background =
    "rgba(255,255,255,.05)";

    nav.style.boxShadow =
    "none";
}

});

const hiddenElements =
document.querySelectorAll(".hidden");

const observer =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }

    });

}, {
    threshold: 0.2
});

hiddenElements.forEach((el) => {
    observer.observe(el);
});

const texts = [
    "IT Support",
    "Tech Enthusiast",
    "Hardware Troubleshouter",
    "Fresh Graduate"
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    const typing = document.getElementById("typing");

    if(charIndex < texts[textIndex].length){
        typing.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    }else{
        setTimeout(() => {
            typing.textContent = "";
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
            typeEffect();
        }, 2000);
    }
}

typeEffect();

function copyEmail(){
    navigator.clipboard.writeText("banggalang1927@gmail.com");

    alert("Email Berhasil Disalin");
}

const glow =
document.getElementById("cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left =
    e.clientX + "px";

    glow.style.top =
    e.clientY + "px";

});

window.addEventListener("load", () => {

    const intro =
    document.getElementById("intro");

    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

        },1000);

    },2500);

});