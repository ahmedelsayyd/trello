const userNav= document.querySelector('.user-nav__user');
const userDropdown= document.querySelector('.user-nav__dropdown');


userNav.addEventListener('click',(e)=>{
    userDropdown.classList.toggle('active');
    console.log(e);
},false)

// function dropdownToggle(){
//     userDropdown.classList.toggle('active');
// }