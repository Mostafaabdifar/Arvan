const acc = document.querySelectorAll('.project__content--item');
const icon = document.querySelectorAll('.change-icon');

 function changeImg(el) {
  icon.forEach(element => element.addEventListener('click',function(){
    if(el.style.display === "block"){
      element.src ="img/Group 13786.svg";
    }else{
      element.src ="img/Group 13788.svg";
    }
  }));
}
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      changeImg(panel);
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      panel.classList.add('project__content-main');
    }
  })
}
