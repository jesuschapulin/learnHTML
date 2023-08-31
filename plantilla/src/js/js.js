jQuery( document ).ready(function( $ ) {
  var SliderAnimation = {
    IN: 0,
    OUT: 1,
    
    init: function() {
      var self = this;
      $('.slide').on('click', function(){
        self.transition(self.IN, $(this));
      });
      $('.page').on('click', function(){
        self.transition(self.OUT, $(this).data('the-slide'));
      });
    },
    
    transition: function(direction, $slide) {
      //Determine the slides to the left and right
      $left = $slide.prevAll();
      $right = $slide.nextAll();
      
      if(this.IN == direction) {
        $slide.addClass('fadeOut');
        $left.addClass('animate-out-left');
        $right.addClass('animate-out-right');
        
        $('.page').data('the-slide', $slide);
        $('.slider').addClass('inactive');
      }
      else {
        $slide.removeClass('fadeOut');
        $left.removeClass('animate-out-left');
        $right.removeClass('animate-out-right');
        
        $('.page').data('the-slide', '');
        $('.slider').removeClass('inactive');
      }
    }
  }
  
  SliderAnimation.init();
});