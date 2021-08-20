const tabSession = document.querySelectorAll('.session__tabs-navbar-item');
const toolTip = document.querySelectorAll('.session__tooltip');

/// tooltips ///////

tabSession.forEach(el => el.addEventListener('click', () => {
  const target = document.querySelector(el.dataset.session);
  toolTip.forEach((content) => {
    content.classList.remove('active');
  })
  tabSession.forEach(element => {
    element.classList.remove('active');
  });

  target.classList.add('active')
}))


 /// tabs ////////

function onTabClick(evt) {
  setLineStyle(evt.target);
}

function setLineStyle(tab) {
  let line = document.querySelector('.session__tabs--line')
  line.style.left = tab.offsetLeft + "px";
  line.style.width = tab.offsetWidth + "px";
}

window.onload = function () {
  const tabs = document.querySelectorAll('.session__tabs-navbar-item')
  tabs.forEach((tab, index) => {
    tab.onclick = onTabClick;

    if (index == 0) {
      setLineStyle(tab)
    };
  })
}