document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("img").style.opacity = "1";

    let top = document.getElementById('top');
    //let logo = document.getElementById('logo');
    let maintitle = document.getElementById('maintitle');
    //let content = document.querySelector('.content');
    let mainpage = document.getElementById("mainpage");
    let pjfeature = document.getElementById("pjfeature");
    let pjsp = document.getElementById("pjsp");
    let aboutus = document.getElementById("aboutus")

    //topbut
    let pjfbut = document.getElementById("pjfbut");
    let buy = document.getElementById("buy");

    top.classList.add('top-color1');
    //logo.classList.add('logo');
    // 設定滾動位置，這裡設定為 content 區塊的底部

    // 設定閾值，當滾動位置小於等於閾值時改變顏色
    let threshold = 50;
    let scrollPosition;
    window.onscroll = function() {
        scrollPosition = mainpage.getBoundingClientRect().bottom;
        //console.log(scrollPosition);

        if (scrollPosition <= threshold) {
            //console.log("Changing to red...");
            top.classList.add('top-color2');
            top.classList.remove('top-color1');
            //logo.classList.add('logo2');
            //logo.classList.remove('logo');
            maintitle.classList.add('maintitle2');
            maintitle.classList.remove('maintitle');
        } else {
            //console.log("Changing to blue...");
            top.classList.remove('top-color2');
            top.classList.add('top-color1');
            //logo.classList.remove('logo2');
            //logo.classList.add('logo');
            maintitle.classList.remove('maintitle2');
            maintitle.classList.add('maintitle');   
        }
    };

    //pjfeature
    let textfadin = document.querySelectorAll(".t2");
    function checkFadeIn() {
        textfadin.forEach(function(element) {
            let elementTop = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (elementTop < windowHeight) {
                element.classList.add('textfadein');
            }
        });
    }

    window.addEventListener("scroll", checkFadeIn);
    checkFadeIn(); // 確保在頁面載入時即使不滾動也進行一次檢查

});

function scrollToPjf(){
    pjfeature.scrollIntoView({
        behavior:"smooth"
    });
    //window.scrollBy(0, 20);
}
function scrollToPjsp(){
    pjsp.scrollIntoView({
        behavior:"smooth"
    });
    //window.scrollBy(0, 20);
}
function scrollToAboutus(){
    aboutus.scrollIntoView({
        behavior:"smooth"
    });
    //window.scrollBy(0, 20);
}
function goToBuyURL(){
    //window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfTjHZhdewoDpsgE10-xJ7Pd3LY0SSz7RhEyTLNFrHe6xm2fQ/viewform"
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfTjHZhdewoDpsgE10-xJ7Pd3LY0SSz7RhEyTLNFrHe6xm2fQ/viewform', '_blank');
}
function goToFacebook(){
    //window.location.href = "https://www.facebook.com/Medallife2021app"
    window.open('https://www.facebook.com/Medallife2021app', '_blank');
}

