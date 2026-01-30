const ID_MOBILE_MENU = 'mobile-menu';
const ID_MENU_OPEN_BTN = 'menu-btn';
const ID_MENU_CLOSE_BTN = 'close-menu-btn';
const CLASS_PAGE_NO_SCROLL = 'page--no-scroll';
const BREAKPOINT_LARGE = 1440;

const mobileMenu = document.getElementById(ID_MOBILE_MENU);
const openMenuBtn = document.getElementById(ID_MENU_OPEN_BTN);
const closeMenuBtn = document.getElementById(ID_MENU_CLOSE_BTN);

const anchors = mobileMenu.querySelectorAll('a');

const largeMQ = window.matchMedia(`(min-width: ${BREAKPOINT_LARGE}px)`);

largeMQ.addEventListener('change', (e) => {
  if (e.matches && mobileMenu.open) {
    mobileMenu.close();
  }
});

const handleOpenMenuBtnClick = (e) => {
  e.preventDefault();
  openMenuBtn.setAttribute('aria-expanded', true);
  document.body.classList.add(CLASS_PAGE_NO_SCROLL);
  mobileMenu.showModal();
};

const handleCloseMenuBtnClick = (e) => {
  e.preventDefault();
  mobileMenu.close();
};

const handleMobileMenuClose = (e) => {
  openMenuBtn.setAttribute('aria-expanded', false);
  document.body.classList.remove(CLASS_PAGE_NO_SCROLL);
};

const handleAnchorClick = (e) => {
  setTimeout(() => {
    mobileMenu.close();
  }, 500);
};

mobileMenu.addEventListener('close', handleMobileMenuClose);
openMenuBtn.addEventListener('click', handleOpenMenuBtnClick);
closeMenuBtn.addEventListener('click', handleCloseMenuBtnClick);

anchors.forEach((a) => {
  a.addEventListener('click', handleAnchorClick);
});
