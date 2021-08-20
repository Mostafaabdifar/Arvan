const acc = document.querySelectorAll('.project__content--item');
const icon = document.querySelectorAll('.change-icon');

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      panel.classList.add('project__content-main');
    }
  })
}
