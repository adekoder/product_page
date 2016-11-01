$(document).ready(function (){
	// hidden the product description box.. ..
	$(".descp").hide();

	
	var  cart_count = $("#cart-count");
	var int = 0 
		cart_count.html(int);

	// self involking function performming the product description transition...
	(function (){
		
		var product_box = $(".product-container");
	
		product_box.on('mouseover' , function()
		{	
			$(this).find(".descp").fadeIn();
			
		});
		
		product_box.on('mouseleave' , function ()
		{
				$(this).find(".descp").fadeOut(800);
		});

	})();

	// close product delete function ....
	$(".close").on('click' , function ()
	{	
		// getting the main container of the particular close button that was clicked 
		$(this).parents(".main").hide(900, function ()
			{
					$(this).remove();
			});
	});

	// shopping cart counting function ....
	$(".add-cart").on('click' , function ()
	{
		var current_count = parseInt( cart_count.text() );
			current_count = current_count + 1;
			//console.log(current_count);
		cart_count.html(current_count); 
	});

});
