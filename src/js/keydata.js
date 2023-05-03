const keyData = [
  [ // line 1
    {
      key: { ru: 'ё', en: '`' }, shift: { ru: 'Ё', en: '~' }, code: 'Backquote', type: 'char',
    },
    {
      key: { ru: '1', en: '1' }, shift: { ru: '!', en: '!' }, code: 'Digit1', type: 'num',
    },
    {
      key: { ru: '2', en: '2' }, shift: { ru: '"', en: '@' }, code: 'Digit2', type: 'num',
    },
    {
      key: { ru: '3', en: '3' }, shift: { ru: '№', en: '#' }, code: 'Digit3', type: 'num',
    },
    {
      key: { ru: '4', en: '4' }, shift: { ru: ';', en: '$' }, code: 'Digit4', type: 'num',
    },
    {
      key: { ru: '5', en: '5' }, shift: { ru: '%', en: '%' }, code: 'Digit5', type: 'num',
    },
    {
      key: { ru: '6', en: '6' }, shift: { ru: ':', en: '^' }, code: 'Digit6', type: 'num',
    },
    {
      key: { ru: '7', en: '7' }, shift: { ru: '?', en: '&' }, code: 'Digit7', type: 'num',
    },
    {
      key: { ru: '8', en: '8' }, shift: { ru: '*', en: '*' }, code: 'Digit8', type: 'num',
    },
    {
      key: { ru: '9', en: '9' }, shift: { ru: '(', en: '(' }, code: 'Digit9', type: 'num',
    },
    {
      key: { ru: '0', en: '0' }, shift: { ru: ')', en: ')' }, code: 'Digit0', type: 'num',
    },
    {
      key: { ru: '-', en: '-' }, shift: { ru: '_', en: '_' }, code: 'Minus', type: 'num',
    },
    {
      key: { ru: '=', en: '=' }, shift: { ru: '+', en: '+' }, code: 'Equal', type: 'num',
    },
    {
      key: 'Backspace', code: 'Backspace', type: 'func', class: ['key--long', 'key2'],
    },
  ],
  [ // line 2
    {
      key: 'Tab', code: 'Tab', type: 'char', class: ['key--long', 'key2'],
    },
    {
      key: { ru: 'й', en: 'q' }, shift: { ru: 'Й', en: 'Q' }, code: 'KeyQ', type: 'char',
    },
    {
      key: { ru: 'ц', en: 'w' }, shift: { ru: 'Ц', en: 'W' }, code: 'KeyW', type: 'char',
    },
    {
      key: { ru: 'у', en: 'e' }, shift: { ru: 'У', en: 'E' }, code: 'KeyE', type: 'char',
    },
    {
      key: { ru: 'к', en: 'r' }, shift: { ru: 'К', en: 'R' }, code: 'KeyR', type: 'char',
    },
    {
      key: { ru: 'е', en: 't' }, shift: { ru: 'Е', en: 'T' }, code: 'KeyT', type: 'char',
    },
    {
      key: { ru: 'н', en: 'y' }, shift: { ru: 'Н', en: 'Y' }, code: 'KeyY', type: 'char',
    },
    {
      key: { ru: 'г', en: 'u' }, shift: { ru: 'Г', en: 'U' }, code: 'KeyU', type: 'char',
    },
    {
      key: { ru: 'ш', en: 'i' }, shift: { ru: 'Ш', en: 'I' }, code: 'KeyI', type: 'char',
    },
    {
      key: { ru: 'щ', en: 'o' }, shift: { ru: 'Щ', en: 'O' }, code: 'KeyO', type: 'char',
    },
    {
      key: { ru: 'з', en: 'p' }, shift: { ru: 'З', en: 'P' }, code: 'KeyP', type: 'char',
    },
    {
      key: { ru: 'х', en: '[' }, shift: { ru: 'Х', en: '{ ' }, code: 'BracketLeft', type: 'char',
    },
    {
      key: { ru: 'ъ', en: ']' }, shift: { ru: 'Ъ', en: ' }' }, code: 'BracketRight', type: 'char',
    },
    {
      key: 'Del', code: 'Delete', type: 'func', class: ['key--long', 'key2'],
    },
  ],
  [ // line 3
    {
      key: 'Caps Lock', code: 'CapsLock', type: 'func', class: ['key--long', 'key2', 'caps'],
    },
    {
      key: { ru: 'ф', en: 'a' }, shift: { ru: 'Ф', en: 'A' }, code: 'KeyA', type: 'char',
    },
    {
      key: { ru: 'ы', en: 's' }, shift: { ru: 'Ы', en: 'S' }, code: 'KeyS', type: 'char',
    },
    {
      key: { ru: 'в', en: 'd' }, shift: { ru: 'В', en: 'D' }, code: 'KeyD', type: 'char',
    },
    {
      key: { ru: 'а', en: 'f' }, shift: { ru: 'А', en: 'F' }, code: 'KeyF', type: 'char',
    },
    {
      key: { ru: 'п', en: 'g' }, shift: { ru: 'П', en: 'G' }, code: 'KeyG', type: 'char',
    },
    {
      key: { ru: 'р', en: 'h' }, shift: { ru: 'Р', en: 'H' }, code: 'KeyH', type: 'char',
    },
    {
      key: { ru: 'о', en: 'j' }, shift: { ru: 'О', en: 'J' }, code: 'KeyJ', type: 'char',
    },
    {
      key: { ru: 'л', en: 'k' }, shift: { ru: 'Л', en: 'K' }, code: 'KeyK', type: 'char',
    },
    {
      key: { ru: 'д', en: 'l' }, shift: { ru: 'Д', en: 'L' }, code: 'KeyL', type: 'char',
    },
    {
      key: { ru: 'ж', en: ';' }, shift: { ru: 'Ж', en: ':' }, code: 'Semicolon', type: 'char',
    },
    {
      key: { ru: 'э', en: '\'' }, shift: { ru: 'Э', en: '"' }, code: 'Quote', type: 'char',
    },
    {
      key: 'Enter', code: 'Enter', type: 'func', class: ['key--long', 'key2'],
    },
  ],
  [ // line 4
    {
      key: 'Shift', code: 'ShiftLeft', type: 'func', class: ['key--long', 'key2', 'shift-left'],
    },
    {
      key: { ru: '\\', en: '\\' }, shift: { ru: '|', en: '|' }, code: 'Backslash', type: 'char',
    },
    {
      key: { ru: 'я', en: 'z' }, shift: { ru: 'Я', en: 'Z' }, code: 'KeyZ', type: 'char',
    },
    {
      key: { ru: 'ч', en: 'x' }, shift: { ru: 'Ч', en: 'X' }, code: 'KeyX', type: 'char',
    },
    {
      key: { ru: 'с', en: 'c' }, shift: { ru: 'С', en: 'C' }, code: 'KeyC', type: 'char',
    },
    {
      key: { ru: 'м', en: 'v' }, shift: { ru: 'М', en: 'V' }, code: 'KeyV', type: 'char',
    },
    {
      key: { ru: 'и', en: 'b' }, shift: { ru: 'И', en: 'B' }, code: 'KeyB', type: 'char',
    },
    {
      key: { ru: 'т', en: 'n' }, shift: { ru: 'Т', en: 'N' }, code: 'KeyN', type: 'char',
    },
    {
      key: { ru: 'ь', en: 'm' }, shift: { ru: 'Ь', en: 'M' }, code: 'KeyM', type: 'char',
    },
    {
      key: { ru: 'б', en: ',' }, shift: { ru: 'Б', en: '<' }, code: 'Comma', type: 'char',
    },
    {
      key: { ru: 'ю', en: '.' }, shift: { ru: 'Ю', en: '>' }, code: 'Period', type: 'char',
    },
    {
      key: { ru: '.', en: '/' }, shift: { ru: ',', en: '?' }, code: 'Slash', type: 'char',
    },
    {
      key: '▲', code: 'ArrowUp', type: 'func', class: ['key3'],
    },
    {
      key: 'Shift', code: 'ShiftRight', type: 'func', class: ['key--long', 'key2', 'shift-right'],
    },
  ],
  [
    {
      key: { ru: '🇷🇺', en: '🇺🇸' }, code: 'Lang', type: 'func', class: ['lang', 'key1'],
    },
    {
      key: 'Ctrl', code: 'ControlLeft', type: 'func', class: ['key--long', 'key2'],
    },
    {
      key: 'Alt', code: 'AltLeft', type: 'func', class: ['key--long', 'key2'],
    },
    {
      key: ' ', code: 'Space', type: 'char', class: ['key--space', 'key1'],
    },
    {
      key: 'Alt', code: 'AltRight', type: 'func', class: ['key--long', 'key2'],
    },
    {
      key: 'Ctrl', code: 'ControlRight', type: 'func', class: ['key--long', 'key2'],
    },
    {
      key: '◄', code: 'ArrowLeft', type: 'func', class: ['key3'],
    },
    {
      key: '▼', code: 'ArrowDown', type: 'func', class: ['key3'],
    },
    {
      key: '►', code: 'ArrowRight', type: 'func', class: ['key3'],
    },
  ],
];

export default keyData;
