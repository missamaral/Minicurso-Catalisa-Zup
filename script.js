const gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 826);
}

//Minha ideia foi juntar todas as sections em um NodeList usando querySelectorAll, e depois aplicar um laço de repetição para repetir o código fetch().then() em cada um dos nodes/sections. Não consegui fazer sozinha, então perguntei no Stack Overflow e me ajudaram a solucionar assim:
const sections = document.querySelectorAll('section');
let i = 0;
let timer;

const pegarPersonagens = () => {
    if (i == sections.length) return;
    let numeroAleatorio = gerarValorAleatorio();

    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers:{
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        let section = sections[i];
        let imagem = section.querySelector('img');
        let nomePersonagem = section.querySelector('.nome');
        let especie = section.querySelector('.especie');
        let condicao = section.querySelector('.status');
        imagem.src = data.image;
        imagem.alt = data.name;
        nomePersonagem.innerHTML = data.name
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
        i++;
        timer = setTimeout(pegarPersonagens, 100);
    })
    }

    window.addEventListener("load", function() {
        const botao = document.querySelector('button');

        botao.addEventListener("click", function() {
            i = 0;
            clearTimeout(timer);
            pegarPersonagens();
      })
      pegarPersonagens();
    })

    //Ainda não entendi perfeitamente como funciona o setTimeout e o addEventListener, mas dá pra ter uma ideia porque compreendo inglês sem dificuldade. Achei okay usar o StackOverflow porque já ouvi dizer que faz parte do trabalho no dia-a-dia. Espero que não me prejudique na avaliação! Um abraço e obrigada!