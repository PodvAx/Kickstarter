/* eslint-disable no-console */
import translationEnglish from './translate-en.json';
import translationUkrainian from './translate-ua.json';

const LNG_BTN_EN_ID = 'lng-btn-en';
const LNG_BTN_UA_ID = 'lng-btn-ua';
const CLASS_SELECTED_LNG_BTN = 'language-selector__button--selected';
const KEY_EN = 'en';
const KEY_UA = 'ua';
const STORAGE_LANG_KEY = 'pref-lang';

const languageEnBtn = document.getElementById(LNG_BTN_EN_ID);
const languageUaBtn = document.getElementById(LNG_BTN_UA_ID);

const LANG_BUTTONS = {
  [KEY_EN]: languageEnBtn,
  [KEY_UA]: languageUaBtn,
};

let currentLang = null;

if (!languageEnBtn || !languageUaBtn) {
  console.error('Language buttons not found in DOM');
}

const getSelector = (id, className) => {
  if (id) {
    return `#${id}`;
  }

  if (className) {
    return `.${className}`;
  }

  return null;
};

const translate = (lang) => {
  const dictionary =
    lang === KEY_UA ? translationUkrainian : translationEnglish;

  if (!Array.isArray(dictionary)) {
    console.error('Translation dictionary is not an array');

    return;
  }

  dictionary.forEach(({ class: className, id, attr, innerHTML }) => {
    const selector = getSelector(id, className);

    if (!selector) {
      console.warn('Translation entry has no id or class:', { id, className });

      return;
    }

    const htmlElement = document.querySelector(selector);

    if (!htmlElement) {
      console.warn('Element not found for selector:', selector);

      return;
    }

    if (innerHTML) {
      htmlElement.innerHTML = innerHTML;
    }

    if (attr) {
      Object.entries(attr).forEach(([key, value]) => {
        htmlElement.setAttribute(key, value);
      });
    }
  });
};

const getDefaultLang = () => {
  for (const [key, btn] of Object.entries(LANG_BUTTONS)) {
    if (btn.classList.contains(CLASS_SELECTED_LNG_BTN)) {
      return key;
    }
  }

  return KEY_EN;
};

const updateLangBtns = (lang) => {
  Object.entries(LANG_BUTTONS).forEach(([key, btn]) => {
    btn.classList.toggle(CLASS_SELECTED_LNG_BTN, key === lang);
  });
};

const applyLang = (lang) => {
  if (lang === currentLang) {
    localStorage.setItem(STORAGE_LANG_KEY, lang);

    return;
  }
  console.log('call interaction with DOM');
  translate(lang);
  updateLangBtns(lang);
  currentLang = lang;
  localStorage.setItem(STORAGE_LANG_KEY, lang);
};

const addBtnListeners = () => {
  Object.entries(LANG_BUTTONS).forEach(([key, btn]) => {
    btn.addEventListener('click', (e) => {
      applyLang(key);
    });
  });
};

window.addEventListener('load', (e) => {
  const storedLang = localStorage?.getItem(STORAGE_LANG_KEY);

  const lang = storedLang || getDefaultLang();

  applyLang(lang);

  addBtnListeners();
});
