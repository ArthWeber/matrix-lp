document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');


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
})

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