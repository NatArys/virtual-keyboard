import keyData from './keydata';
import createNewNode from './createnode';

class Keyboard {
  constructor() {
    this.lang = 'en';
    this.caps = false;
    this.shift = false;
  }

  generateKeyboard() {
    if (localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang');
    } else {
      localStorage.setItem('lang', this.lang);
    }

    const keyboard = createNewNode('section', '', 'keyboard');
    const keyBox = createNewNode('div', '', 'keyboard__wrapper');

    for (let i = 0; i < keyData.length; i += 1) {
      const line = createNewNode('div', '', 'keyboard__line');

      keyData[i].forEach((e) => {
        const keyLabel = (e.key.ru && e.key.en) ? e.key[this.lang] : e.key;
        const key = createNewNode('div', keyLabel, 'key');

        key.dataset.code = e.code;
        key.dataset.type = e.type;

        if (e.class) {
          key.classList.add(...e.class);
        } else {
          key.classList.add('key1');
        }

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
    const langK = this.lang;
    const keysArr = document.querySelectorAll('.key');

    if (e.shiftKey || this.shift) {
      keysArr.forEach((item) => {
        if (item.dataset[`${langK}Shift`]) {
          /* eslint-disable no-param-reassign */
          item.innerHTML = this.caps ? item.dataset[`${langK}Shift`].toLowerCase() : item.dataset[`${langK}Shift`];
        } else if (item.dataset[langK]) item.innerHTML = item.dataset[langK];
      });
    } else {
      keysArr.forEach((item) => {
        if (item.dataset[langK]) {
          if (this.caps && !(e.shiftKey || this.shift)) {
            item.innerHTML = item.dataset[langK].toUpperCase();
          } else item.innerHTML = item.dataset[langK];
        }
      });
    }
  }

  changeShift(e) {
    if (this.shift) {
      this.shift = !this.shift;
      document.querySelector('.shift-left').classList.remove('press');
      document.querySelector('.shift-right').classList.remove('press');

      this.replaceKeyVal(e);
    }
  }

  changeCaps(e) {
    this.caps = !this.caps;
    const keyCaps = document.querySelector('.caps');
    if (this.caps) {
      keyCaps.classList.add('press');
    } else keyCaps.classList.remove('press');
    this.replaceKeyVal(e);
  }

  сhangeLang(e) {
    this.lang = (this.lang === 'en') ? 'ru' : 'en';
    localStorage.setItem('lang', this.lang);

    this.replaceKeyVal(e);
  }
}

export default Keyboard;
