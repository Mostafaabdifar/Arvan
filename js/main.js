const button = document.querySelectorAll('.project__tab--link');
const tabContent = document.querySelectorAll('[data-tab-content]');

button.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.tabTarget);
    tabContent.forEach((content) => {
      content.classList.remove('active');
    })
    button.forEach(el => {
      el.classList.remove('active');
    });
    btn.classList.add('active');
    target.classList.add('active');
  })
});