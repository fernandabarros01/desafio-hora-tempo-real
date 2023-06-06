function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12) {
   img.src = 'img/dia.png'
   document.body.style.background = 'rgb(228, 228, 126)'

} else if (hora >= 12 && hora < 18){
    img.src = 'img/tarde.png'
    document.body.style.background = 'rgba(151, 151, 211, 0.878)'
}else {
    img.src = 'img/noite.png'
    document.body.style.background = 'rgba(0, 0, 0, 64.64)'
}
}