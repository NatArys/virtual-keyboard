import keyData from './keydata.js';
import { createNewNode } from './createnode.js';

class Keyboard {


  constructor() {
    this.lang = 'en';
    this.caps = false;
    this.shift = false;
  }



  generateKeyboard() {
    const keyboard = createNewNode('section', '', 'keyboard');
    const keyBox = createNewNode('div', '', 'keyboard__wrapper');

    for (let i = 0; i < keyData.length; i++) {

      const line = createNewNode('div', '', 'keyboard__line');

      keyData[i].forEach((e) => {
        const keyLabel = (e.key.ru && e.key.en) ? e.key[this.lang] : e.key;
        const key = createNewNode('div', keyLabel, 'key', 'key1');

        key.dataset.code = e.code;
        key.dataset.type = e.type;

        if (e.class) key.classList.add(...e.class);

        if (e.key.ru && e.key.en) {
          key.dataset.ru = e.key.ru;
          key.dataset.en = e.key.en;
        }

        if (e.shift) {
          key.dataset.ruShift = e.shift.ru;
          key.dataset.enShift = e.shift.en;
        }



        line.append(key);

      });
      keyBox.append(line);
    }
    keyboard.append(keyBox);
    return keyboard;
  }

  replaceKeyVal(e) {
    const lang = this.lang;
    const keysArr = document.querySelectorAll('.key');

    if (e.shiftKey || this.shift) {
      keysArr.forEach((item) => {
        if (item.dataset[`${lang}Shift`]) {
          // caps?
          item.innerHTML = this.caps ? item.dataset[`${lang}Shift`].toLowerCase() : item.dataset[`${lang}Shift`];

        } else if (item.dataset[lang]) item.innerHTML = item.dataset[lang];
      });
    }

    else {
      keysArr.forEach((item) => {
        if (item.dataset[lang]) {
          if (this.caps && !(e.shiftKey || this.shift)) {
            item.innerHTML = item.dataset[lang].toUpperCase();
          } else item.innerHTML = item.dataset[lang];
        }
      });
    }
  }

  changeShift(e) {
    if (this.shift) {
      console.log('this.shift', this.shift);
      this.shift = !this.shift;
      document.querySelector('.shift-left').classList.remove('press');
      document.querySelector('.shift-right').classList.remove('press');

      this.replaceKeyVal(e);
    }
  }

  changeCaps(e) {
    this.caps = !this.caps;
    const keyCaps = document.querySelector('.caps');
    this.caps ? keyCaps.classList.add('press') : keyCaps.classList.remove('press');
    this.replaceKeyVal(e);
  }

  сhangeLang(e) {
    this.lang = (this.lang === 'en') ? 'ru' : 'en';
    localStorage.setItem('lang', this.lang);

    this.replaceKeyVal(e);
  }

}

export default Keyboard;