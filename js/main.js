
const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-toggle');
if (menu && header) {
  menu.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '×' : '☰';
  });
}
const form = document.getElementById('authForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.getElementById('formMessage');
    const isSignup = location.pathname.endsWith('signup.html');
    message.textContent = isSignup
      ? 'Demo account form submitted. Connect a backend to enable real registration.'
      : 'Demo sign-in submitted. Connect an authentication service to enable real login.';
  });
}
const forgot = document.getElementById('forgotLink');
if (forgot) forgot.addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('formMessage').textContent = 'Password reset is a demo placeholder. Connect an email service to enable resets.';
});
