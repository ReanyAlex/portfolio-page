class Canvas {
  constructor() {
    this.canvas = document.querySelector('#draw');
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = window.innerWidth;
    this.canvas.height = 1000;
    this.ctx.strokeStyle = '#BADA55'
    this.ctx.lineJoin = 'round'
    this.ctx.lineCap = 'round'
    this.ctx.lineWidth = 100;

    this.isDrawing =false;
    this.lastX = 0;
    this.lastY = 0;
    this.hue = 0;
    this.direction = true;
    this.events();
    this.that = this;
  }



  events(){
    console.log("2");
    console.log(this);
    this.canvas.addEventListener('mousedown', (e) => {
      this.isDrawing = true;
      [this.lastX, this.lastY] = [e.offsetX, e.offsetY]
    });

    this.canvas.addEventListener('mousemove', draw);
    this.canvas.addEventListener('mouseup', () => this.isDrawing = false);
    this.canvas.addEventListener('mouseout', () => this.isDrawing = false);
  }

  draw(e) {
    console.log(e);
    console.log("1");
    console.log(this);
    //stops function from drawing when isDrawingis false
    if(!this.isDrawing) return;
    ctx.strokeStyle = `hsl(${hue},100%, 50%)`
    ctx.beginPath()
    ctx.moveTo(this.lastX,this.lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    hthis.ue++;
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1 ) {
      this.direction = !this.direction
    }

    if (this.direction) {
      ctx.lineWidth++
    }else {
      ctx.lineWidth--
    }
  }
}

export default Canvas
