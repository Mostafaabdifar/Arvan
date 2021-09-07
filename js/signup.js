/// Drop Down Select

let type = document.getElementById("type");
let field = document.getElementById('field');
let options = document.querySelector(".select-box");
let level = document.querySelector('.level');
let optionList = document.querySelectorAll('.option');
let value = document.querySelectorAll('#value');

field.addEventListener('click', () => {
  level.classList.toggle('active-select')
})

type.addEventListener('click', () => {
  options.classList.toggle('active-select');
})

value.forEach(val => val.addEventListener('click', () => {
  field.innerHTML = val.querySelector('#la').innerHTML;
  level.classList.remove('active-select');
}))

optionList.forEach(el => el.addEventListener('click', () => {
  type.innerHTML = el.querySelector('#type').innerHTML;
  options.classList.remove('active-select');
}))



/// Input File

let inputResume = document.getElementById('resume');
let inputPortfolio = document.getElementById('portfolio');
let pathResume = document.getElementById('resume-file');
let pathPortfolio = document.getElementById('portfolio-file');
let warn = document.getElementById('note1');
let warn2 = document.getElementById('note2');
let format = document.getElementById('format-resume')
let format2 = document.getElementById('format-portfolio')


inputResume.onchange = function (event) {
  let resume = event.target.files;
  if (resume[0].size > 1048576) {
    pathResume.innerHTML = "";
    warn.setAttribute("style", "color: red;");
    format.classList.add('warn-message')
    warn.innerHTML = "فایل بزرگتر از حد مجاز است";
  } else {
    pathResume.innerHTML = resume[0].name;
    warn.setAttribute("style", "");
    format.classList.remove('warn-message')
    warn.innerHTML = "فایل بارگذاری شد";
  }

}
inputPortfolio.onchange = function (event) {
  let portfolio = event.target.files;
  if (portfolio[0].size > 1048576) {
    pathPortfolio.innerHTML = "";
    warn2.setAttribute("style", "color: red;");
    format2.classList.add('warn-message')
    warn2.innerHTML = "فایل بزرگتر از حد مجاز است";
  } else {
    pathPortfolio.innerHTML = portfolio[0].name;
    warn2.setAttribute("style", "");
    format2.classList.remove('warn-message')
    warn2.innerHTML = "فایل بارگذاری شد";
  }

}

///condition///

let inputForm = document.querySelectorAll('.input_form');
let drop = document.querySelectorAll('.drop_form')
let singUpButton = document.querySelector('.signUp__button');
console.log(inputForm,drop)
inputForm.onchange = function(){

}



// console.log(inputForm);
// if (inputForm.values !== "") {
//   singUpButton.style.backgroundColor = "red";
// } else {
//   singUpButton.style.backgroundColor = "";

// }
// // inputForm.forEach(el => function(){
//   if(singUp.value.length>0){
//     singUpButton.style.backgroundColor = "red";
//   }
// // })