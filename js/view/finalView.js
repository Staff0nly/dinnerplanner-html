var FinalView = function (container, model) {

	var selectedDishes = model.getSelectedDishes();

	// set number of guests
	var numberOfGuests = model.getNumberOfGuests();
	container.find("#numberOfGuests span").html(numberOfGuests);	
	
	// set the total price
	container.find("#totalPrice").html(model.getTotalMenuPrice());
	
	
	var list = container.find("#displayList");
	
	// append HTML for each selected dish to the table
	for(var i = 0;i<selectedDishes.length;i++){
		var dishPrice = numberOfGuests;
		
		
		if(selectedDishes[i] == undefined){ //if a dish is not chosen
			
			var toAppend = "<li><div class='img'><img src='images/noimage.jpg' width='140' height='140'><div class='desc'>Not chosen</div><div class='price'>0 SEK</div></div></li>"

		} else {
			dishPrice = model.getDish(selectedDishes[i].id);
			var toAppend = "<li><div class='img'><img src='images/"+selectedDishes[i].image+"' width='140' height='140'><div class='desc'>"+selectedDishes[i].name+"</div><div class='price'>"+dishPrice+" SEK</div></div></li>"
		}
		
		list.append(toAppend);
	}

	
}