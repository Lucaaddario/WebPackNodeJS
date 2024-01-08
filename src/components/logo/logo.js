import logoImg from './logo.png';
import style from './style.css';

function logo() {
    const logoDomImg = new Image();
    logoDomImg.src = logoImg;
    logoDomImg.className = 'myLogo';
    return logoDomImg;
}

export default logo;