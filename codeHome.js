//Funcões que fazem os botões DA TURMA funcionarem________________________________________________________
function ano1() {
    window.location.replace("../INFO/Notices/1ano.html");
  }
  function ano2() {
    window.location.replace("../INFO/Notices/2ano.html");
  }
  function ano3() {
    window.location.replace("../INFO/Notices/3ano.html");
  }
  
  //Código para fazer o scrool suave_________________________________________________________________________
  const menuItems = document.querySelectorAll(".menu a");
  menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
  });
  function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const to = document.querySelector(id).offsetTop;
  window.scroll({
    top: to - 120,
    behavior: "smooth",
  });
  }
  
  //código do carrossel do banner____________________________________________________________________________
  let img = document.getElementById('home-banner-img'),
      index = 0,
      time = 5000
  
  function next(){
    if(index == 0){
      img.innerHTML = '<img src="../INFO/pictures/banner-home/homeBanner02.png" id="banner-img">'
      index = 1     
    } else if(index == 1){
      img.innerHTML = '<img src="../INFO/pictures/banner-home/homeBanner01.png" id="banner-img">'
      index = 0
    }
  }
  
  function start() {
    setInterval(() => {
      //troca de imagem
      next() 
  
    }, time)
  }
  window.addEventListener("load", start)