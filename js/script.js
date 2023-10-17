// button back-top
window.addEventListener('scroll', function () {
    var backToTopButton = document.getElementById('back-top');
    if (document.documentElement.scrollTop > 700) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
}); 
// sau khi click back-top
document.getElementById('back-top').addEventListener('click', function () {
    document.documentElement.scrollTop = 0;
});

// nav bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// pick photo
const MainImg = document.getElementById("MainImg");
const smallimg = document.getElementsByClassName("small-img");
smallimg[0].onclick = function () {
    MainImg.src = smallimg[0].src;
}

smallimg[1].onclick = function () {
    MainImg.src = smallimg[1].src;
}

smallimg[2].onclick = function () {
    MainImg.src = smallimg[2].src;
}

smallimg[3].onclick = function () {
    MainImg.src = smallimg[3].src;
}

// an hien nut back top
// Lắng nghe sự kiện cuộn trang
// Lắng nghe sự kiện cuộn trang


