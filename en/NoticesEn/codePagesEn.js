//Código para fazer o scrool suave_____________________________________________
const menuItems = document.querySelectorAll('.menu a[href^="#"]');
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

//Código PopUp para add um aviso_______________________________________________
function iniciaModal(modalID){
const modal = document.getElementById(modalID);
const btn = document.getElementById('btn-add-new-aviso')
btn.addEventListener('click', (c) => {
  modal.classList.remove('mostrar')
})
modal.classList.add('mostrar')
modal.addEventListener('click', (e) => {
  if(e.target.id == modalID || e.target.className == 'fechar'){
    modal.classList.remove('mostrar')
  }
  })
}
function criarAviso(){
iniciaModal('btn-modal')
}

//Código que adiciona um aviso_________________________________________________

//Variáveis para pegar a data atual:
  var data = new Date(),
    dia = data.getDate(),
    mes = data.getMonth()

//Variável que seleciona a DIV dos avisos:   
  var campoAviso = document.getElementById('avisos'),
      avisoOLD = campoAviso.innerHTML

//variáveis dos atributos do aviso:
var nome, aviso, senha, cor, grau, numAviso

function checkAndPost(){
  //Pegando de fato os atributos e colocando nas variáveis:
    nome = document.getElementById('aviso.name').value
    aviso = document.getElementById('aviso.txt').value
    senha = document.getElementById('aviso.key').value
    numAviso = 1

  //Verifica se todos os dados foram corretamente escritos:
    if(nome === '' || aviso  === ''){
      alert("Todos os campos devem estar preenchidos!")
    } else if(senha != "058729"){
      alert("Senha incorreta! Tente novamente.")
    } else {
      
    
  //Escrevendo o novo aviso no documento HTML:
  var avisoNEW = '<div class="item-aviso" id="'+numAviso+'">'+
  '<div class="nome-aviso" id="nome-001">'+nome+'</div>'+
  '<div class="texto-aviso" id="txt-001">'+aviso+'</div>'+
  '<div class="data-aviso" id="data-001">'+(mes+1)+'/'+dia+'</div>'+
  '</div>'
  //Concatena os avisos
  avisoNEW = avisoNEW + avisoOLD
  //Ação de postar os avisos
  campoAviso.innerHTML = avisoNEW

  //Variáveis que definem a relevância (cor) do aviso:
  //bloco try/catch para o radio button
  try{
    grau = document.querySelector('input[name="grau-radio"]:checked').value
  }catch (e) {
    grau = '1'
  }
    cor = document.getElementById(numAviso)

  //Definindo de fato a cor do aviso:
    if(grau === '1'){
      cor.style.cssText = 'background-color: #74cbdd'
    } else if (grau === '2'){
      cor.style.cssText = 'background-color: #e5daa5'
    } else if (grau === '3'){
      cor.style.cssText = 'background-color: #db586e'
    } 

    //Alertando que o aviso foi adicionado e mudando o ID do próximo aviso a ser adicionado:
    alert('Aviso adicionado com sucesso!');
    numAviso++

  }

}


