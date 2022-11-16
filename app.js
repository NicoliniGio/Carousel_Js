//Colocando todas as imagens em um array
const slides = document.querySelectorAll('[data-js="carousel_item"]')
//instanciando os botões para realizar ações
const nextButton = document.querySelector('[data-js="carousel_button_next"]')
const prevButton = document.querySelector('[data-js="carousel_button_prev"]')
//Colocando todos os elementos 'p' em um array
const sinopses = document.querySelectorAll('[data-js="carousel_item_p"]')

//Variavel que vai percorrer os arrays 'slides' e 'sinopses'
let currentSlideIndex = 0

//Função e evento que vai modificar a imagem e a sinopse (botão direito ">")
nextButton.addEventListener('click', () => {
    //percorrendo cada imagem do array
    slides.forEach(slide =>{
        //removendo a classe que deixa a imagem em 'display:block;'
        slide.classList.remove('img_carousel_visible')
    })
    //Condicional usada para não causar erro quando a variavel de controle superar o número de elementos no array
    //Quando 'currentSlideIndex' > o tamanho de slides - 1 (22). 22 = última imagem
    if(currentSlideIndex === slides.length - 1){
        //Volta para primeira imagem
        currentSlideIndex = 0
    }else{
        //incremente a variável para acessar os elementos do array(slides)
        currentSlideIndex++
    }
    //Adicionando a imagem em questão a classe que deixa a imagem em 'display:block;'
    slides[currentSlideIndex].classList.add('img_carousel_visible')

    //percorrendo todos os elementos 'p' dentro do array(sinopses)
    sinopses.forEach(sinopse =>{
        //Removendo a classe que habilita o parágrafo 'display:block;'
        sinopse.classList.remove('p_carousel_visible')
    })
    //Adicionando a classe que habilita a visibilidade do parágrafo
    sinopses[currentSlideIndex].classList.add('p_carousel_visible')
})

//Esse evento Habilita a função acima para o botão esquerdo "<"
prevButton.addEventListener('click', () => {
    slides.forEach(slide =>{
        slide.classList.remove('img_carousel_visible')
    })
    if (currentSlideIndex === 0){
        currentSlideIndex = slides.length - 1
    }else{
        currentSlideIndex--
    }

    slides[currentSlideIndex].classList.add('img_carousel_visible')

    sinopses.forEach(sinopse =>{
        sinopse.classList.remove('p_carousel_visible')
    })

    sinopses[currentSlideIndex].classList.add('p_carousel_visible')
})