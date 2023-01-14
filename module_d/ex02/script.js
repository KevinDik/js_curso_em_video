function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let resultado = document.getElementById('resultado');

    if(fano.value.length == 0 || fano.value > ano) {
        alert('verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = ''
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked) {
            genero = 'homem';
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'homem-bebe.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'homem-jovem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'homem-adulto.jpg');
            } else {
                img.setAttribute('src', 'homem-idoso.jpg');
            }
        } else if(fsex[1].checked) {
            genero = 'feminino';
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mulher-bebe.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher-jovem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher-adulta.jpg');
            } else {
                img.setAttribute('src', 'mulher-idosa.jpg');                
            }
        }
        resultado.style.textAlign = 'center';
        resultado.innerHTML = genero + idade
        resultado.appendChild(img)
    }
}