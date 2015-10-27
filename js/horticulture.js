(function($) {

			$("#owl-hort-slider").owlCarousel({
			
			navigation : false, // hide next and prev buttons
			pagination:false,
			autoPlay:7500,
			addClassActive:true,
	      	slideSpeed : 300,
	      	paginationSpeed : 400,
	      	singleItem:true
			});

	$( document ).ready(function() {

		if($('body').is(".home.blog")){



			//assign unique ID's to slides
			var counter = 0;
			var current = $(this).attr("id");

			$(".owl-item").each(function(i){
				console.log(i + ":" + current);

				if ( !current ){
					$(this).attr("id","slide-" +counter)
				}
				counter++;
			});
		}



	});

})( jQuery );