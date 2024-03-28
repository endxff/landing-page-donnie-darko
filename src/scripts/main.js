document.addEventListener('DOMContentLoaded', function () {
    const heroPhotosButton = document.querySelector('.hero__photos__card');
    const heroPhotosHidden = document.querySelectorAll('.hero__photos__card--hidden');
    let isHeroPhotosAcitve = true;

    const card = document.querySelectorAll('.card');
    const resetCards = document.querySelectorAll('.card__text--inactive');
    const resetActiveStyle = document.querySelectorAll('.card img');

    const buttonsTheories = document.querySelectorAll('[data-tab-button]');

    const scrollTop = document.querySelector('.scrollTop');

    window.addEventListener('scroll', function() {
        const actualPosition = window.scrollY;

        if (actualPosition !== 0) {
            activeHeaderStyle();
        } else {
            inactiveHeaderStyle();
        }
    })

    function activeHeaderStyle() {
        const header = document.querySelector('.header__container');
        const headerLogo = document.querySelector('.header__logo');
        const headerTitle = document.querySelector('.header__title');
        const headerLinks = document.querySelector('.header__links');

        header.classList.add('header__container--fixedStyle');
        headerLogo.classList.add('header__logo--fixedStyle');
        headerTitle.classList.add('header__title--fixedStyle');
        headerLinks.classList.add('header__links--fixedStyle');
        scrollTop.classList.add('scrollTop--isActive');
    }

    function inactiveHeaderStyle() {
        const header = document.querySelector('.header__container');
        const headerLogo = document.querySelector('.header__logo');
        const headerTitle = document.querySelector('.header__title');
        const headerLinks = document.querySelector('.header__links');

        header.classList.remove('header__container--fixedStyle');
        headerLogo.classList.remove('header__logo--fixedStyle');
        headerTitle.classList.remove('header__title--fixedStyle');
        headerLinks.classList.remove('header__links--fixedStyle');
        scrollTop.classList.remove('scrollTop--isActive');
    }
    
    heroPhotosButton.addEventListener('click', function () {
        if (isHeroPhotosAcitve == true) {
            showCast();
            isHeroPhotosAcitve = false;
        } else {
            hideCast();
            isHeroPhotosAcitve = true;
        }
    });
    
    function showCast() {
        for (i = 0; i < heroPhotosHidden.length; i++) {
            heroPhotosHidden[i].classList.remove('hero__photos__card--hidden');
        }
    };
    
    function hideCast() {
        for (i = 0; i < heroPhotosHidden.length; i++) {
            heroPhotosHidden[i].classList.add('hero__photos__card--hidden');
        }
    }

    card.forEach((card, index) => {
        card.addEventListener('click', function(){
            const cardText = this.nextElementSibling.classList;
            const cardActiveStyle = this.querySelector('img');
            
            if (cardText.contains('card__text--inactive')) {
                for (i = 0; i < resetCards.length; i++) {
                    resetCards[i].classList.add('card__text--inactive');
                    resetActiveStyle[i].classList.remove('--isActive');
                }
            }

            cardText.toggle('card__text--inactive');
            cardActiveStyle.classList.toggle('--isActive');
        })
    })

    for (let i = 0; i < buttonsTheories.length; i++) {
        buttonsTheories[i].addEventListener('click', function(button) {
            const targetTab = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            hideAllTabs();
            tab.classList.add('theories__item--isActive');
            removeTabActiveButton();
            button.target.classList.add('theories__tabs__button--isActive');
        })
    }

    function hideAllTabs() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');

        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('theories__item--isActive')
        }
    }

    function removeTabActiveButton() {
        const buttons = document.querySelectorAll('[data-tab-button]');

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('theories__tabs__button--isActive');
        }
    }
})