
let navIcon =document.querySelector('.nav-icon1')


  navIcon.addEventListener('click',function(){
    var navSm = document.getElementsByClassName("nav-sm");
    navSm = Array.from(navSm)
    navSm.forEach(element => {
        element.style.display=== "none" ? element.style.display= "inline-block" : element.style.display= "none";
        
    });
  })



  document.querySelector('.toggle-switch').addEventListener('click', function(event) { 
    event.preventDefault();
    const themeStyle = document.getElementById('theme-style'); 
    if (themeStyle.getAttribute('href') === 'style/index_light_mode.css') {
       themeStyle.setAttribute('href', 'style/index_dark_mode.css'); 
      } else {
         themeStyle.setAttribute('href', 'style/index_light_mode.css'); 
        } 
      });
