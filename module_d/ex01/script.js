function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} Horas`;
    if(hora >= 0 && hora < 12) {
        img.src = 'manha.jpg';
        document.body.style.backgroundColor = "yellow"
    } else if(hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg';
        document.body.style.backgroundColor = "orange"
    } else {
        img.src = 'noite.jpg';
        document.body.style.backgroundColor = "darkblue";
    }
}