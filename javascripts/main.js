$(function() {
	$('a[href*=#]:not([href=#])').click(scrollToAnchor);
});

function scrollToAnchor() { 
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      	var target = $(this.hash);
      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      	if (target.length) {
        	$('html,body').animate({
	          	scrollTop: target.offset().top
	        }, 500);
        	
        	if(history.pushState) {
        	    history.pushState(null, null, this.hash);
        	}
        	else {
        	    location.hash = this.hash;
        	}

        	return false;
        }
	}
}