import './app.scss';
import isPortraitLayout from './js/utils/functions/isPortraitLayout';

const start = () => {
    window.addEventListener('load', () => {
        const tpl = document.getElementById('tpl');

        if (!isPortraitLayout()) {
            const header = document.querySelector('.new-header');
            const headerHeight = header ? header.offsetHeight : 0;

            tpl.style.setProperty('--header-offset', 1 - (headerHeight / window.innerHeight));
            tpl.style.setProperty('height', `${window.innerHeight - headerHeight}px`);
        }

        setTimeout(() => {
            tpl.classList.add('ready');
        }, 300);
    });
};

start();
