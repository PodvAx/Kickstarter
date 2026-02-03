'use strict';

const ID_MODAL = 'success-message';
const ID_BTN_CLOSE_MODAL = 'close-success-message-btn';
const ID_CONTACT_FORM = 'contact-form';

const INPUT_CLASS = 'text-input';
const INPUT_SUCCESS_CLASS = 'text-input--success';

const contactForm = document.getElementById(ID_CONTACT_FORM);
const contactFormInputs = document.querySelectorAll(`.${INPUT_CLASS}`);
const modal = document.getElementById(ID_MODAL);
const closeModalBtn = document.getElementById(ID_BTN_CLOSE_MODAL);

const handleSubmitForm = (e) => {
  e.preventDefault();
  contactForm.reset();
  contactFormInputs.forEach(markInputAsSuccessful);
  modal.showModal();

  setTimeout(() => {
    contactFormInputs.forEach(unmarkInputAsSuccessful);
    modal.close();
  }, 10000);
};

const markInputAsSuccessful = (input) => {
  input.classList.add(INPUT_SUCCESS_CLASS);
  input.blur();
  input.disabled = true;
};

const unmarkInputAsSuccessful = (input) => {
  input.classList.remove(INPUT_SUCCESS_CLASS);
  input.disabled = false;
};

const handleClickCloseModalBtn = (e) => {
  e.preventDefault();

  modal.close();
};

const handleKeyDownOnForm = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    if (typeof contactForm.requestSubmit === 'function') {
      contactForm.requestSubmit();
    } else {
      const submitBtn = contactForm.querySelector(
        '[type="submit"], button:not([type])',
      );

      if (submitBtn) {
        submitBtn.click();
      } else {
        contactForm.dispatchEvent(new Event('submit'));
      }
    }
  }
};

closeModalBtn.addEventListener('click', handleClickCloseModalBtn);

contactForm.addEventListener('submit', handleSubmitForm);

contactForm.addEventListener('keydown', handleKeyDownOnForm);
