var open = false;

var loanMenuTrigger = document.getElementById('js-loan-menu-trigger');
var loanSubMenuTitle = document.getElementById('js-loan-submenu-title');
var resourcesMenuTrigger = document.getElementById('js-resources-menu-trigger');
var resourcesSubMenuTitle = document.getElementById('js-resources-submenu-title');
var aboutMenuTrigger = document.getElementById('js-about-menu-trigger');
var aboutSubMenuTitle = document.getElementById('js-about-submenu-title');

loanMenuTrigger.addEventListener('click', function(e) {
    if (e.currentTarget !== e.target) {
        return;
    }
    mobileLoanMenu();
}, false);

loanSubMenuTitle.addEventListener('click', function(e) {
    if (e.currentTarget !== e.target) {
        return;
    }
    mobileLoanMenu();
}, false);

resourcesMenuTrigger.addEventListener('click', function(e) {
    if (e.currentTarget !== e.target) {
        return;
    }
    mobileResourcesMenu();
}, false);

resourcesSubMenuTitle.addEventListener('click', function(e) {
    if (e.currentTarget !== e.target) {
        return;
    }
    mobileResourcesMenu();
}, false);

aboutMenuTrigger.addEventListener('click', function(e) {
    if (e.currentTarget !== e.target) {
        return;
    }
    mobileAboutMenu();
}, false);

aboutSubMenuTitle.addEventListener('click', function(e) {
    if (e.currentTarget !== e.target) {
        return;
    }
    mobileAboutMenu();
}, false);

function handleMenu() {
    if (!open) {
        document.getElementById('js-navigation').classList.add('open');
        document.getElementById('js-hamburger').classList.add('is-active');
        open = true;
    } else {
        document.getElementById('js-navigation').classList.remove('open', 'slideOut');
        document.getElementById('js-hamburger').classList.remove('is-active');
        document.getElementById('js-loan-menu').classList.remove('openSubmenu');
        document.getElementById('js-resources-menu').classList.remove('openSubmenu');
        document.getElementById('js-about-menu').classList.remove('openSubmenu');
        open = false;
    }
}

var loanMenuOpen = false;

function mobileLoanMenu () {
    if (open && !loanMenuOpen) {
        document.getElementById('js-loan-menu').classList.add('openSubmenu');
        document.getElementById('js-navigation').classList.add('slideOut');
        loanMenuOpen = true;
    } else {
        document.getElementById('js-loan-menu').classList.remove('openSubmenu');
        document.getElementById('js-navigation').classList.remove('slideOut');
        loanMenuOpen = false;
    }
}

var resourcesMenuOpen = false;

function mobileResourcesMenu () {
    if (open && !resourcesMenuOpen) {
        document.getElementById('js-resources-menu').classList.add('openSubmenu');
        document.getElementById('js-navigation').classList.add('slideOut');
        resourcesMenuOpen = true;
    } else {
        document.getElementById('js-resources-menu').classList.remove('openSubmenu');
        document.getElementById('js-navigation').classList.remove('slideOut');
        resourcesMenuOpen = false;
    }
}

var aboutMenuOpen = false;

function mobileAboutMenu () {
    if (open && !aboutMenuOpen) {
        document.getElementById('js-about-menu').classList.add('openSubmenu');
        document.getElementById('js-navigation').classList.add('slideOut');
        aboutMenuOpen = true;
    } else {
        document.getElementById('js-about-menu').classList.remove('openSubmenu');
        document.getElementById('js-navigation').classList.remove('slideOut');
        aboutMenuOpen = false;
    }
}