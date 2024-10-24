document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const awards = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < heroHeight) {
            hiddenHeader();            
        } else {
            showHeader();
        }
    })

//about tab
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(bttn) {
            const targetTab = bttn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            hiddenTabs();
            tab.classList.add('about__list--is-active')
            removeActiveBtn();
            bttn.target.classList.add('about__tabs__button--is-active')
        })
    }

//Awards
    for (let i = 0; i < awards.length; i++) {
        awards[i].addEventListener('click', openClose);
    }
})

//Function header

function hiddenHeader () {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
}

function showHeader () {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}

//Funtions about tabs
function hiddenTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('about__list--is-active');
    }
}

function removeActiveBtn() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('about__tabs__button--is-active');
    }
}

//Function FAQ
function openClose(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

