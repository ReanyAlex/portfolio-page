import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import Konami from './modules/Konami';
// import Canvas from './modules/Canvas';
import $ from 'jquery';

let mobileMenu = new MobileMenu();

// new RevealOnScroll($(".feature-item"), "85%");
// new RevealOnScroll($(".testimonial"), "60%");
let stickyHeader = new StickyHeader();
let modal = new Modal();
let konami = new Konami();
// let canvas = new Canvas();

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = 1000;
ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 60;

let isDrawing =false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  //stops function from drawing when isDrawingis false
  if(!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue},100%, 50%)`
  ctx.beginPath()
  ctx.moveTo(lastX,lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (ctx.lineWidth >= 75 || ctx.lineWidth <= 50 ) {
    console.log(ctx.lineWidth);
    direction = !direction
  }

  if (direction) {
    ctx.lineWidth++
  }else {
    ctx.lineWidth--
  }

}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]
})

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
