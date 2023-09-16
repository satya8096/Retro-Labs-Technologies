var quotesSlideIndex = 1;
quoetsShowSlides(quotesSlideIndex);

function plusSlides(n) {
  quoetsShowSlides(quotesSlideIndex += n);
}

function currentSlide(n) {
  quoetsShowSlides(quotesSlideIndex= n);
}

function quoetsShowSlides(n) {
  var i;
  var quotesSlides = document.getElementsByClassName("quotes-slides");
  var quotesDots = document.getElementsByClassName("quotes-dot");
  if (n > quotesSlides.length) {quotesSlideIndex = 1}    
  if (n < 1) {quotesSlideIndex = quotesSlides.length}
  for (i = 0; i < quotesSlides.length; i++) {
    quotesSlides[i].style.display = "none";  
  }
  for (i = 0; i < quotesDots .length; i++) {
    quotesDots [i].className = quotesDots [i].className.replace(" active", "");
  }
  quotesSlides[quotesSlideIndex-1].style.display = "block";  
  quotesDots [quotesSlideIndex-1].className += " active";
  setTimeout(quoetsShowSlides, 2000);
}