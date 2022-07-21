let elems = document.querySelectorAll('.div1 > button')
for(item of elems){
  item.addEventListener('click',expand);
  function expand(){
    console.log(this);
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if(content.style.display==="block"){
      content.style.display = "none";
    }else{
      content.style.display="block"
    }
  }
}

let navbar = document.querySelector('#nav2 > div:nth-child(5) > button');
navbar.addEventListener('click',nav);
function nav(){
  this.classList.toggle("active");
  // let elem1 = document.querySelector('#nav2 > button');
  // let elem2 = document.querySelector('#nav2 > div:nth-child(3)')
  // let elem3 = document.querySelector('#nav2 > div:nth-child(2)')
  // if(elem1.style.display==="block"){
  //   elem1.style.display = "none";
  //   elem2.style.display = "none";
  //   elem3.style.display = "none";
  // }else{
  //   elem1.style.display="block"
  //   elem2.style.display="block"
  //   elem3.style.display="block"
  // }
}

let button = document.querySelector('#pricing > .second > p');
button.addEventListener('click',run);
function run(){
  if(document.querySelector('#pricing > .second > p:nth-child(2)').classList.contains('doIt')){
    document.querySelector('#pricing > .second > p:nth-child(2)').classList.remove('doIt');
  }
  document.querySelector('#xd').innerText = '6.3'
  document.querySelector('#dx').innerText = ' 9'
  this.classList.toggle('doIt');
  document.querySelector('#pricing > .second > p:nth-child(1) > span').style.color = 'white'
}
let button2 = document.querySelector('#pricing > .second > p:nth-child(2)');
button2.addEventListener('click',run2);
function run2(){
  if(document.querySelector('#pricing > .second > p').classList.contains('doIt')){
    document.querySelector('#pricing > .second > p').classList.remove('doIt');
    document.querySelector('#pricing > .second > p:nth-child(1) > span').style.color = '#25CF60'
  }
  document.querySelector('#xd').innerText = '7'
  document.querySelector('#dx').innerText = '10'
  this.classList.toggle('doIt');
}