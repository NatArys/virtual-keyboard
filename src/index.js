import './index.html';
import './index.scss';

const body = document.querySelector('body');

const textWrap = createNewNode('section', '', 'input-wrapper');
const inputField = createNewNode('textarea', '', 'input-field');
inputField.id = 'input';
