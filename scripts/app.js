/* STEP 2a - DOM ready*/
			$(function(){

	//		console.log("DOM is ready!");
				/* STEP 2b - script to add class to nav when header is scrolled off screen */
				// Persistent navigation
				//add additional necessary offset for Webkit
				var navTop = $('#floatingbar').offset().top;
			//	console.log(navTop);

				$(window).scroll(function() {
					//console.log("Window scrolled!");
					//Once window has scrolled past the nav height, add class .floater
					if ($(window).scrollTop() > navTop) {
						//Add class .floater
						//	console.log("Add class floater");
						$('#floatingbar').addClass('floater');
					}
					else {
						//remove class floater
						$('#floatingbar').removeClass('floater');
					}
				});
						
				/* STEP 6e - click handler to animate scroll to top */
				$('footer p a.top').click(function(event){
					/* stop default anchor behavior */
					event.preventDefault();
					$('html, body').animate({scrollTop: 0}, 300);
				});

				//Scroll top for lab
				$(document).ready(function() {
					$(window).scroll(function(){
						if ($(this).scrollTop() > 250) {
						/* STEP 6c - sticky footer button appear */
						$('.top').fadeIn(200);
						} else {
							/* STEP 6d - sticky footer button dissappear */
							$('.top').fadeOut(200);
						}
					});
				});
				//Adding .floater class to header
		
				/* STEP 3 - script to duplicate pullquote text */
				$('span.pullquote').each(function(){
					//grab the parent element (p)
					var $parentElem = $(this).parent('p');
					//Clone the span element inside it, add a special class for css, and inject it into the html
					$(this).clone().addClass('pullquote2').prependTo($parentElem);
				}) 
			});
			// end DOM ready