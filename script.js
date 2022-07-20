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

