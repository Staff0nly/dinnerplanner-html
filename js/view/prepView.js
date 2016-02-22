var PrepView = function (container, model) {

	var selectedDishes = model.getSelectedDishes();

	// set number of guests
	container.find("#numberOfGuests span").html(model.getNumberOfGuests());	
	var prepTable = container.find("#prepViewID");
	
	// append HTML for each selected dish to the table
	for(var i = 0;i<selectedDishes.length;i++){
		if(selectedDishes[i] == undefined) break;
		var toAppend = "<div class='container'><div class='row'><div class='col-md-2'><img src='images/" + selectedDishes[i].image + "'></div><div class='col-md-4'><h3>"+ selectedDishes[i].name+"</h3><p>"+selectedDishes[i].description+"</p></div><div class='col-md-6'><div class='preparation'><h5>Preparation</h5><p>"+selectedDishes[i].description+"</p></div></div></div></div>";
		
		prepTable.append(toAppend);
	}

	
}