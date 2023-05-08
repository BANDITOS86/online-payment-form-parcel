import { el, mount } from 'redom';
import { createPayForm } from './createForm.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import visaImage from '../img/visa.svg';
import mastercardImage from '../img/mastercard.svg';
import maestroImage from '../img/maestro.svg';
import mirImage from '../img/mir.svg';
import unionpayImage from '../img/unionpay.svg';
import americanExpressImage from '../img/american-express.svg';
import dinersClubImage from '../img/diners-club.svg';
import discoverImage from '../img/discover.svg';
import eloImage from '../img/elo.svg';
import hiperImage from '../img/hiper.svg';
import hiperCardImage from '../img/hipercard.svg';
import jcbImage from '../img/jcb.svg';

const valid = require('card-validator');
const validator = require('email-validator');

const container = el('div', { className: 'container pt-5' });
const formCard = createPayForm();

mount(window.document.body, container);
mount(container, formCard.form);

let imageElement;

function createDataValidAtributeFalse(input) {
  input.setAttribute('data-valid', false);
  _isValid = input.dataset.valid;
}

function createDataValidAtributeTrue(input) {
  input.setAttribute('data-valid', true);
  _isValid = input.dataset.valid;
}

function showErrorMessage(errorMessage, input) {
  errorMessage.style.display = 'block';
  input.classList.add('is-invalid');
}

function hideErrorMessage(errorMessage, input) {
  errorMessage.style.display = 'none';
  input.classList.remove('is-invalid');
}

function createImageLogoPaySystem(srcImage) {
  imageElement = el('img', {
    className: 'img-fluid position-absolute',
    src: srcImage,
    style: {
      top: '3px',
      right: '25px',
      width: '50px',
      borderRadius: '5px',
    },
  });
}

function getDataInput() {
  let cardNumberData = formCard.cardNumberInput.dataset.valid;
  let cardExpirationDateData = formCard.cardExpirationDateInput.dataset.valid;
  let cardCvcCvvData = formCard.cardCvcCvvInput.dataset.valid;
  let cardEmailData = formCard.cardEmailInput.dataset.valid;

  const isDisabled =
    cardNumberData !== 'true' ||
    cardExpirationDateData !== 'true' ||
    cardCvcCvvData !== 'true' ||
    cardEmailData !== 'true';
  formCard.cardFormButton.disabled = isDisabled;
}

formCard.cardNumberInput.addEventListener('blur', () => {
  let numberValidation = valid.number(formCard.cardNumberInput.value);

  if (!numberValidation.isPotentiallyValid) {
    imageElement?.remove();
    showErrorMessage(formCard.cardNumberErrorMessage, formCard.cardNumberInput);
    createDataValidAtributeFalse(formCard.cardNumberInput);
    getDataInput();
  } else {
    hideErrorMessage(formCard.cardNumberErrorMessage, formCard.cardNumberInput);
    createDataValidAtributeTrue(formCard.cardNumberInput);
    getDataInput();
  }

  if (numberValidation.card) {
    if (numberValidation.card.type === 'visa') {
      imageElement?.remove();
      createImageLogoPaySystem(visaImage);
      mount(formCard.cardNumberLabel, imageElement);
    }
    if (numberValidation.card.type === 'mastercard') {
      imageElement?.remove();
      createImageLogoPaySystem(mastercardImage);
      imageElement.style.top = 0;
      imageElement.style.height = '38px';
      mount(formCard.cardNumberLabel, imageElement);
    }
    if (numberValidation.card.type === 'maestro') {
      imageElement?.remove();
      createImageLogoPaySystem(maestroImage);
      imageElement.style.top = '-7px';
      mount(formCard.cardNumberLabel, imageElement);
    }
    if (numberValidation.card.type === 'american-express') {
      imageElement?.remove();
      createImageLogoPaySystem(americanExpressImage);
      imageElement.style.top = '-2px';
      imageElement.style.height = '40px';
      mount(formCard.cardNumberLabel, imageElement);
    }
    if (numberValidation.card.type === 'mir') {
      imageElement?.remove();
      createImageLogoPaySystem(mirImage);
      imageElement.style.top = '-6px';
      mount(formCard.cardNumberLabel, imageElement);
    }
    if (numberValidation.card.type === 'unionpay') {
      imageElement?.remove();
      createImageLogoPaySystem(unionpayImage);
      imageElement.style.top = '-4px';
      imageElement.style.height = '45px';
      mount(formCard.cardNumberLabel, imageElement);
    }
    if (numberValidation.card.type === 'diners-club') {
      imageElement?.remove();
      createImageLogoPaySystem(dinersClubImage);
      imageElement.style.top = '-4px';
      imageElement.style.height = '45px';
      mount(formCard.cardNumberLabel, imageElement);
    }
    if (numberValidation.card.type === 'discover') {
      imageElement?.remove();
      createImageLogoPaySystem(discoverImage);
      imageElement.style.top = '-4px';
      imageElement.style.height = '45px';
      mount(formCard.cardNumberLabel, imageElement);
    }
    if (numberValidation.card.type === 'elo') {
      imageElement?.remove();
      createImageLogoPaySystem(eloImage);
      imageElement.style.top = '-4px';
      imageElement.style.height = '45px';
      mount(formCard.cardNumberLabel, imageElement);
    }
    if (numberValidation.card.type === 'hiper') {
      imageElement?.remove();
      createImageLogoPaySystem(hiperImage);
      imageElement.style.top = '-4px';
      imageElement.style.height = '45px';
      mount(formCard.cardNumberLabel, imageElement);
    }
    if (numberValidation.card.type === 'hipercard') {
      imageElement?.remove();
      createImageLogoPaySystem(hiperCardImage);
      imageElement.style.top = '-7px';
      mount(formCard.cardNumberLabel, imageElement);
    }
    if (numberValidation.card.type === 'jcb') {
      imageElement?.remove();
      createImageLogoPaySystem(jcbImage);
      imageElement.style.top = '-4px';
      imageElement.style.height = '45px';
      mount(formCard.cardNumberLabel, imageElement);
    }
  }
});

formCard.cardExpirationDateInput.addEventListener('blur', () => {
  let cardExpirationDate = valid.expirationDate(
    formCard.cardExpirationDateInput.value
  );

  if (!cardExpirationDate.isPotentiallyValid) {
    showErrorMessage(
      formCard.cardExpirationDateErrorMessage,
      formCard.cardExpirationDateInput
    );
    createDataValidAtributeFalse(formCard.cardExpirationDateInput);
    getDataInput();
  } else {
    hideErrorMessage(
      formCard.cardExpirationDateErrorMessage,
      formCard.cardExpirationDateInput
    );
    createDataValidAtributeTrue(formCard.cardExpirationDateInput);
    getDataInput();
  }
});

formCard.cardCvcCvvInput.addEventListener('blur', () => {
  let cardCvcCvv = valid.cvv(formCard.cardCvcCvvInput.value);

  if (!cardCvcCvv.isValid) {
    showErrorMessage(formCard.cardCvcCvvErrorMessage, formCard.cardCvcCvvInput);
    createDataValidAtributeFalse(formCard.cardCvcCvvInput);
    getDataInput();
  } else {
    hideErrorMessage(formCard.cardCvcCvvErrorMessage, formCard.cardCvcCvvInput);
    createDataValidAtributeTrue(formCard.cardCvcCvvInput);
    getDataInput();
  }
});

formCard.cardEmailInput.addEventListener('blur', () => {
  const emailValid = validator.validate(formCard.cardEmailInput.value);

  if (emailValid !== true) {
    showErrorMessage(formCard.cardEmailErrorMessage, formCard.cardEmailInput);
    createDataValidAtributeFalse(formCard.cardEmailInput);
    getDataInput();
  } else {
    hideErrorMessage(formCard.cardEmailErrorMessage, formCard.cardEmailInput);
    createDataValidAtributeTrue(formCard.cardEmailInput);
    getDataInput();
  }
});

formCard.form.addEventListener('submit', e => {
  e.preventDefault();
});
