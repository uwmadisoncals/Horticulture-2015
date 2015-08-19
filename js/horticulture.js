(function($) {

	$( document ).ready(function() {

		if($('body').is(".home.blog")){

			$("#owl-hort-slider").owlCarousel({
			
			navigation : true, // Show next and prev buttons
	      	slideSpeed : 300,
	      	paginationSpeed : 400,
	      	singleItem:true
			});

		}



	});

})( jQuery );
