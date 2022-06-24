window.addEventListener('scroll', onScroll)

const navigation = document.getElementById('navigation')

onScroll()
//Gerencia os Scrolls da página
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2
    
    //verificar se a seção passou da linha
    //quais dados vou precisar?

    //offsetTop nos trás a informação de onde se inicia a página.
    const sectionTop = section.offsetTop
    //offsetTop nos trás a informação da altura da página.
    const sectionHeight = section.offsetHeight

    //o topo da seção chegou ou ultrapassou a linha alvo?
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    //informações dos dados da lógica
    //console.log(
     //       'O topo da seção chegou ou passou da linha?',
    //        sectionTopReachOrPassedTargetLine
    //)

    //verificar se a base está abaixo da linha alvo
    //quais dados vou precisar?
    
    //a seção termina onde?
    const sectionEadAt = sectionTop + sectionHeight

    //o final da seção passou da linha do alvo
    const sectionEndPassedTargetline = sectionEadAt <= targetLine

    //console.log(
    //    'O fundo da seção passou da linha alvo',
        sectionEndPassedTargetline
   // )

    //limites da seção
    const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline
    
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove ('active')
    if (sectionBoundaries) {
        menuElement.classList.add ('active')
    }
}

//Mostrar o navigation ao mostrar o scroll
function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
      navigation.classList.remove('scroll')
    }
}
 
//Mostrar o botão back to top ao rolar a página para baixo
function showBackToTopButtonOnScroll() {
    if(scrollY > 400) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card
    #about, 
    #about header, 
    #about .content`)