let logo = document.querySelector('#nav2 img');
logo.addEventListener('click',open);
function open(){
  window.location.href = 'index.html'
  console.log(1);
}

let signupopen = document.querySelectorAll('.signup');
for(item of signupopen){
  item.addEventListener('click',run);
  function run(){
    window.location.href = 'signup.html';
  }
}