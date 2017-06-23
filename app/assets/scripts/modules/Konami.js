import $ from 'jquery';

class Konami {
  constructor() {
    this.pressed= [];
    this.secretCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';
    this.modalSecret = $('.modal-secret');
    this.closeModalButton = $('.modal-secret__close');
    this.events();
    this.on = true;
  }

  events(){
    window.addEventListener('keyup', (e) =>{
      this.pressed.push(e.key)
      this.pressed.splice(-this.secretCode.length-1, this.pressed.length - this.secretCode.length);
      console.log(e);

      if (e.keyCode == 27) {
        this.modalSecret.removeClass("modal-secret--is-visible");
        return false;
      }

      if (this.on) {
         if (this.pressed.join("").includes(this.secretCode)) {
          this.modalSecret.addClass("modal-secret--is-visible");
          this.on = false;
          console.log("DING DING");

          return false;
        }
      }
    });

    this.closeModalButton.click(this.closeModalSecret.bind(this));
  }

  closeModalSecret(){
    this.modalSecret.removeClass("modal-secret--is-visible");
  }


}

export default Konami;
