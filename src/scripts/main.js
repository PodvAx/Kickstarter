// 'use strict';

// const FORM_ID = 'contact-form';
// const INPUT_CLASS = 'text-input';
// const INPUT_SUCCESS_CLASS = 'text-input--success';
// const MODAL_CLASS = 'modal';
// const MODAL_ACTIVE_CLASS = 'modal--visible';
// const FOCUSABLE_MODAL_BUTTON_CLASS = 'modal__close-button';
// const MODAL_OVERLAY_CLASS = 'modal__overlay';

// const contactForm = document.getElementById(FORM_ID);
// const formInputs = document.querySelectorAll(`.${INPUT_CLASS}`);
// const modal = document.querySelector(`.${MODAL_CLASS}`);
// const modalOverlay = modal.querySelector(`.${MODAL_OVERLAY_CLASS}`);
// const focusableModalButton = modal.querySelector(
//   `.${FOCUSABLE_MODAL_BUTTON_CLASS}`,
// );

// const closeModal = () => {
//   modal.classList.remove(MODAL_ACTIVE_CLASS);
//   document.body.removeAttribute('style');
// };

// const openModal = () => {
//   modal.classList.add(MODAL_ACTIVE_CLASS);
//   focusableModalButton.focus();
//   document.body.style.overflow = 'hidden';
// };

// const markInputAsSuccessful = (input) => {
//   input.classList.add(INPUT_SUCCESS_CLASS);
//   input.blur();
//   input.disabled = true;
// };

// const unmarkInputAsSuccessful = (input) => {
//   input.classList.remove(INPUT_SUCCESS_CLASS);
//   input.disabled = false;
// };

// const formSubmissionHandler = (e) => {
//   e.preventDefault();

//   contactForm.reset();

//   formInputs.forEach((input) => {
//     markInputAsSuccessful(input);
//   });

//   openModal();

//   setTimeout(() => {
//     formInputs.forEach((input) => {
//       unmarkInputAsSuccessful(input);
//     });
//   }, 10000);
// };

// modal.addEventListener('keydown', (e) => {
//   if (e.key === 'Tab') {
//     e.preventDefault();
//     focusableModalButton.focus();
//   } else if (e.key === 'Escape') {
//     closeModal();
//   }
// });

// modalOverlay.addEventListener('click', () => {
//   closeModal();
// });

// focusableModalButton.addEventListener('click', () => {
//   closeModal();
// });

// contactForm.onsubmit = formSubmissionHandler;

// contactForm.onkeydown = function (e) {
//   if (e.key === 'Enter') {
//     e.preventDefault();

//     if (typeof contactForm.requestSubmit === 'function') {
//       contactForm.requestSubmit();
//     } else {
//       // Fallback: click the submit button to trigger native validation
//       const submitBtn = contactForm.querySelector(
//         '[type="submit"], button:not([type])',
//       );

//       if (submitBtn) {
//         submitBtn.click();
//       } else {
//         contactForm.dispatchEvent(new Event('submit'));
//       }
//     }
//   }
// };
