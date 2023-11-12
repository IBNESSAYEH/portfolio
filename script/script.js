
let navIcon =document.querySelector('.material-symbols-outlined')


  navIcon.addEventListener('click',function(){
    var navSm = document.getElementsByClassName("nav-sm");
    navSm = Array.from(navSm)
    navSm.forEach(element => {
        element.style.display=== "none" ? element.style.display= "inline-block" : element.style.display= "none"
        element.style.transform= "rotate(360deg)"
    });
  })