(function($) {

	$( document ).ready(function() {

		if($('body').is(".home.blog")){

			$("#owl-hort-slider").owlCarousel({
			
			navigation : false, // hide next and prev buttons
			//autoPlay:4500,
			addClassActive:true,
	      	slideSpeed : 300,
	      	paginationSpeed : 400,
	      	singleItem:true
			});

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

			//slide_wrapper_inner width fix
			/*var slideWidth = $(".slide").width();
			console.log("slideWidth: "+ slideWidth);
			$(".slide_wrapper_inner").css("width", slideWidth); */
		}



	});

})( jQuery );