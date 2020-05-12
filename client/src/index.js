//import './index.sass';
import App from './Components/App.js';

const appContainer = document.getElementById('app');
const adToDoForm = document.getElementById('to-do__add_form');

const app = new App({
    name: 'app',
    appContainer,
    adToDoForm,
});

app.render();