/* any js code that is likely to be used on many pages in this theme.  Assumes jQuery loaded */

// Code from twitter, to render a timeline.  

window.twttr = (function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src= "https://platform.twitter.com/widgets.js";	
  fjs.parentNode.insertBefore(js, fjs);
  t._e = []; 
  t.ready = function (f) { 
  	t._e.push(f); 
  };
  return t;
}(document, "script", "twitter-wjs"));



jQuery(document).ready(function(){

  jQuery('#block-menu-block-8 li.first ~ li').hide();
  if( jQuery('body').hasClass('page-node-313') ){
	jQuery('#block-menu-block-8 li.first').hide();
	jQuery('#block-menu-block-8 li.menu-mlid-1254').show();
  }  
  if( jQuery('body').hasClass('page-node-1894') ){
	jQuery('#block-menu-block-8 li.first').hide();
	jQuery('#block-menu-block-8 li.menu-mlid-1810').show();
  }
	
  jQuery('#block-menu-block-8 li').mouseover(function(){
    jQuery('#block-menu-block-8 li').show();
  });
 	
  jQuery('#block-menu-block-8 ul').mouseleave(function(){
    jQuery('#block-menu-block-8 li.first ~ li').hide();
	if( jQuery('body').hasClass('page-node-313') ){
		jQuery('#block-menu-block-8 li.first').hide();
		jQuery('#block-menu-block-8 li.menu-mlid-1254').show();
	  }	
	  if( jQuery('body').hasClass('page-node-1894') ){
		jQuery('#block-menu-block-8 li.first').hide();
		jQuery('#block-menu-block-8 li.menu-mlid-1810').show();
	  }
  });
  
  
  	
  jQuery('.glitterboxes_box').mouseover(function(){
    jQuery(this).children('.glitterbox_content').css('top','0');
  });
 	
 	
 	
  jQuery('.glitterboxes_box').mouseleave(function(){
    jQuery(this).children('.glitterbox_content').css('top', '80%');
  	
  });
  
  

  
   /* Custom Twitter Cycle Function */
  
  function tweetCycle() {     
		// Call jquery.cycle library, already loaded 
		jQuery('#block-twitter-block-1 iframe').contents().find('ol').cycle();
  }	

  // Delay time of function call so ran post-DOM load and Twitter API calls
  
  setTimeout(tweetCycle, 1000);

  jQuery('#block-twitter-block-1').css("overflow-y", "hidden");
  


  
});
