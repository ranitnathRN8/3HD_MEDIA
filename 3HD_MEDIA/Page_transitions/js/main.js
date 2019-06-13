Barba.Pjax.start();

// setTimeout(() => {
//   const WRAP = document.querySelector('.main-header');
//   const LINK = document.createElement('a');

//   LINK.setAttribute('href', '../Landing-Copy/landing.html');
//   LINK.innerText = 'Test';

//   WRAP.appendChild(LINK);
// }, 1000);


var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      /**
       * This function is automatically called as soon the Transition starts
       * this.newContainerLoading is a Promise for the loading of the new container
       * (Barba.js also comes with an handy Promise polyfill!)
       */
  
      // As soon the loading is finished and the old page is faded out, let's fade the new page
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },
  
    fadeOut: function() {
      /**
       * this.oldContainer is the HTMLElement of the old Container
       */
  
      return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },
  
    fadeIn: function() {
      /**
       * this.newContainer is the HTMLElement of the new Container
       * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
       * Please note, newContainer is available just after newContainerLoading is resolved!
       */
  
      var _this = this;
      var $el = $(this.newContainer);
  
      $(this.oldContainer).hide();
  
      $el.css({
        visibility : 'visible',
        opacity : 0
      });
  
      $el.animate({ opacity: 1 }, 400, function() {
        /**
         * Do not forget to call .done() as soon your transition is finished!
         * .done() will automatically remove from the DOM the old Container
         */
  
        _this.done();
      });
    }
  });
  
  /**
   * Next step, you have to tell Barba to use the new Transition
   */
  
  Barba.Pjax.getTransition = function() {
    /**
     * Here you can use your own logic!
     * For example you can use different Transition based on the current page or link...
     */
  
    return FadeTransition;
  };

  // Barba.Dispatcher.on('linkClicked', function (HTMLElement) {
  //   // On Link click, get all the elements with --active modifier
  //   // then remove them, as well close the mobile menu by adding
  //   // class "hidden"
  //   const activeNavElements = document.getElementsByClassName('main-header--active');
  //   let i;
  //   for (i = 0; i < activeNavElements.length; i += 1) {
  //     activeNavElements[i].classList.remove('main-header--active');
  //   }
  //   const mobileMenu = document.querySelector('.main-header');
  //   mobileMenu.classList.add('hidden');
  
  //   // Get HTML Elements href pointer, then find the navigation
  //   // link with the matching pointer and add the --active class
  //   // modifier
  //   const elementLink = HTMLElement.getAttribute('href');
  //   const nav = document.querySelector('.main-header');
  //   const navLinkToAddActive = nav.querySelector(`a[href="${elementLink}"]`);
  //   navLinkToAddActive.classList.add('main-header--active');
  // });


  window.onload = function () {
    if (! localStorage.justOnce) {
        localStorage.setItem("justOnce", "true");
        window.location.reload();
    }
}