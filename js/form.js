const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const user = document.getElementById('user-mb');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
}); 


user.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});