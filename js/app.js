const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', presentation);

function presentation(){
    btn1.classList.toggle('active');
}