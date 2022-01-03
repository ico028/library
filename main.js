const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');
readMoreBtn.addEventListener('click', () => {
    let commas = document.getElementById('show-more-commas-second');
    text.classList.toggle('show-more');
    if (readMoreBtn.innerText == 'Read more') {
        readMoreBtn.innerText = 'Read less'
        commas.style.display = "none";
    }
    else {
        readMoreBtn.innerText = 'Read more';
        commas.style.display = "block";
    }

});
const readMoreBtn2 = document.querySelector('.read-more-btn2');
const txt1 = document.querySelector(' .dsc1');
readMoreBtn2.addEventListener('click', () => {
    let commas = document.getElementById('show-more-commas-first');
    txt1.classList.toggle('show-more');
    if (readMoreBtn2.innerText == 'Read more') {
        readMoreBtn2.innerText = 'Read less'
        commas.style.display = "none";
    }
    else {
        readMoreBtn2.innerText = 'Read more';
        commas.style.display = "block";
    }
})
