var slideIndex,slides,dots,captionText;
function initGallery(){
    slideIndex = 0;
    slides=document.getElementsByClassName("imageHolder");
    slides[slideIndex].style.opacity=1;

    captionText=document.querySelector(".captionTextHolder .captionText");
    captionText.innerText=slides[slideIndex].querySelector(".captionText").innerText;

    //disable nextPrevBtn if slide count is one
    if(slides.length<2){
        var nextPrevBtns=document.querySelector(".leftArrow,.rightArrow");
        nextPrevBtns.style.display="none";
        for (i = 0; i < nextPrevBtn.length; i++) {
            nextPrevBtn[i].style.display="none";
        }
    }

    //add dots
    dots=[];
    var dotsContainer=document.getElementById("dotsContainer"),i;
    for (i = 0; i < slides.length; i++) {
        var dot=document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        dot.setAttribute("onclick","moveSlide("+i+")");
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");
}
initGallery();
function plusSlides(n) {
    moveSlide(slideIndex+n);
}
function moveSlide(n){
    var i;
    var current,next;
    var moveSlideAnimClass={
          forCurrent:"",
          forNext:""
    };
    var slideTextAnimClass;
    if(n>slideIndex) {
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
        slideTextAnimClass="slideTextFromTop";
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
        slideTextAnimClass="slideTextFromBottom";
    }

    if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "imageHolder";
            slides[i].style.opacity=0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex=n;
        captionText.style.display="none";
        captionText.className="captionText "+slideTextAnimClass;
        captionText.innerText=slides[n].querySelector(".captionText").innerText;
        captionText.style.display="block";
    }

}
var timer=null;
function setTimer(){
    timer=setInterval(function () {
        plusSlides(1) ;
    },3000);
}
setTimer();
function playPauseSlides() {
    var playPauseBtn=document.getElementById("playPause");
    if(timer==null){
        setTimer();
        playPauseBtn.style.backgroundPositionY="0px"
    }else{
        clearInterval(timer);
        timer=null;
        playPauseBtn.style.backgroundPositionY="-33px"
    }
}
 


function showDateTime() {
    var date = new Date();
    document.getElementById("showDate").innerHTML =date.toUTCString() 
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function changeImage1() {
    var image = document.getElementById('myImage');
    if (image.src.match("images/sheep1.jpg")) {
        image.src = "images/sheep2.jpg";
    }
    else {
        image.src = "images/sheep3.jpg";
    }
}
function changeImage2() {
    var image = document.getElementById('myImage1');
    if (image.src.match("images/hen1.jpg")) {
        image.src = "images/hen2.jpg";
    }
    else {
        image.src = "images/hen3.jpg";
    }
}
function changeImage() {
    var image = document.getElementById('myImage2');
    if (image.src.match("images/rab1.jpg")) {
        image.src = "images/rab2.jpg";
    }
    else {
        image.src = "images/rab3.jpg";
    }
}

 function changeImage4() {
    var image = document.getElementById('myImage');
    if (image.src.match("images/zebra1.jpg")) {
        image.src = "images/zebra2.jpg";
    }
    else {
        image.src = "images/zebra3.jpg";
    }
}
function changeImage5() {
    var image = document.getElementById('myImage1');
    if (image.src.match("images/leo1.jpg")) {
        image.src = "images/leo2.jpg";
    }
    else {
        image.src = "images/leo3.jpg";
    }
}
function changeImage6() {
    var image = document.getElementById('myImage2');
    if (image.src.match("images/rhino1.jpg")) {
        image.src = "images/rhino2.jpg";
    }
    else {
        image.src = "images/rhino3.jpg";
    }
}
function changeImage7() {
    var image = document.getElementById('myImage');
    if (image.src.match("images/buffalo1.jpg")) {
        image.src = "images/buffalo2.jpg";
    }
    else {
        image.src = "images/buffalo3.jpg";
    }
}
function changeImage8() {
    var image = document.getElementById('myImage1');
    if (image.src.match("images/peacock1.jpg")) {
        image.src = "images/peacock2.jpg";
    }
    else {
        image.src = "images/peacock3.jpg";
    }
}
function changeImage9() {
    var image = document.getElementById('myImage2');
    if (image.src.match("images/yeti1.jpg")) {
        image.src = "images/yeti2.jpg";
    }
    else {
        image.src = "images/yeti3.jpg";
    }
}