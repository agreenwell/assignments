var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); 
};
;




var slideIndexx = 1;
showDivs(slideIndexx);

function plusDivs(n) {
    showDivs(slideIndexx += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("wishlistImg");
    if (n > x.length) {slideIndexx = 1} 
    if (n < 1) {slideIndexx = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndexx-1].style.display = "block"; 
}

