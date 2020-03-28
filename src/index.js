import './index.scss';
import myImg from'./happy.jpg';
import icon from './logo.png';

// console.log('hello webpack!');

function useFonts(){
  let el = document.createElement('div');
  el.innerHTML = 'this is power line use webpack to handle fonts';
  el.classList.add('useFonts');

  return el;
}


function component() {
  let el = document.createElement('div');

  el.classList.add('hello');

  // 将图像添加到我们现有的 div。
  let happy = new Image();
  let logoicon = new Image();

  happy.src = myImg;
  logoicon.src = icon;

  el.appendChild(happy);
  el.appendChild(logoicon);

  return el;
}


document.body.appendChild(useFonts());

document.body.appendChild(component());

