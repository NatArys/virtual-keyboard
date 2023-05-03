import './index.html';
import './index.scss';

import Keyboard from './js/keyboard';
import createNewNode from './js/createnode';

const body = document.querySelector('body');

const keyboard = new Keyboard();

const infoText = createNewNode('div', '', 'info');
const changeLangText = createNewNode('div', 'Переключение языка комбинация: левые Shift + Alt', 'lang-text');
const os = createNewNode('div', 'OS WIndows', 'os-text');
const titleText = createNewNode('h1', 'Virtual Keyboard', 'title');
const infoName = createNewNode('div', 'made by <a href="https://github.com/NatArys">NatArys</a>', 'info-name');

const textWrap = createNewNode('section', '', 'input-wrapper');
const inputField = createNewNode('textarea', '', 'input-field');
inputField.id = 'input';

window.onload = () => {
  body.append(textWrap);

  infoText.append(titleText);
  infoText.append(changeLangText);
  infoText.append(os);

  textWrap.append(infoText);
  textWrap.append(inputField);
  textWrap.append(infoName);

  body.append(keyboard.generateKeyboard());

  const pressKey = (event, btn, code) => {
    event.preventDefault();
    inputField.focus();
    let str = '';

    // символы
    if (btn.dataset.type === 'char' || btn.dataset.type === 'num') {
      str = btn.textContent;
      if (code === 'Tab') str = '    ';
      keyboard.changeShift(event);
      inputField.value += str;
    }

    // функциональные
    if (btn.dataset.type === 'func') {
      if (code === 'Enter') {
        inputField.value += '\n';
      }

      if (code === 'CapsLock') {
        keyboard.changeCaps(event);
      }

      if (code === 'AltLeft' && (keyboard.shift || event.shiftKey)) {
        keyboard.сhangeLang(event);
        keyboard.changeShift(event);
      }

      if (code === 'ShiftLeft' || code === 'ShiftRight') {
        keyboard.replaceKeyVal(event);
      }

      if (code === 'Lang') {
        keyboard.сhangeLang(event);
      }

      let caret = inputField.selectionStart;

      if (code === 'ArrowLeft' && caret > 0) {
        inputField.setSelectionRange(caret - 1, caret - 1);
      }
      if (code === 'ArrowRight') {
        caret = inputField.selectionEnd;
        inputField.setSelectionRange(caret + 1, caret + 1);
      }
      if (code === 'ArrowDown' || code === 'ArrowUp') {
        str = btn.textContent;
        keyboard.changeShift(event);
        inputField.value += str;
      }

      if (code === 'Backspace') {
        const strText = inputField.value.substring(0, caret - 1)
          + inputField.value.substring(caret, inputField.value.length);
        inputField.value = strText;
        if (caret > 0) inputField.setSelectionRange(caret - 1, caret - 1);
      }
      if (code === 'Delete') {
        const strText = inputField.value.substring(0, caret)
          + inputField.value.substring(caret + 1, inputField.value.length);
        inputField.value = strText;
        inputField.setSelectionRange(caret, caret);
      }
    }
  };

  // real keyboard
  // нажать
  document.addEventListener('keydown', (e) => {
    const button = document.querySelector(`[data-code=${e.code}]`);
    if (button) {
      button.classList.add('press');
      pressKey(e, button, e.code);
    }
  });

  // key отпустить
  document.addEventListener('keyup', (e) => {
    const button = document.querySelector(`[data-code=${e.code}]`);
    if (button) {
      if (e.code !== 'CapsLock') button.classList.remove('press');

      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        keyboard.changeShift(e);
        keyboard.replaceKeyVal(e);
      }
    }
  });

  // virtual keyboard
  document.querySelector('.keyboard').addEventListener('click', (event) => {
    const button = event.target.closest('.key');
    if (button) {
      if (button.dataset.code === 'ShiftLeft' || button.dataset.code === 'ShiftRight') {
        keyboard.shift = !keyboard.shift;
        button.classList.toggle('press');
      }
      pressKey(event, button, button.dataset.code);
    }
  });
};
