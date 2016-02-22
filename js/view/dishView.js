var DishView = function (container, model) {

	container.find("#dishDescription").html(model.getDish(1).description);

	var ingredientTable = container.find("#appendAfterHere");
	var ingredients = model.getDish(1).ingredients;
	var totalPrice = 0;
	
	// set the dish name
	var dishName = container.find("#dishName");
	dishName.html(model.getDish(1).name);

	// append HTML for each ingredient to the table
	for(var i = 0;i<ingredients.length;i++){
		var toAppend = "<tr><td>" + ingredients[i].quantity + " " + ingredients[i].unit + "</td><td>" + ingredients[i].name +"</td><td>SEK " + ingredients[i].price +"</td></tr> ";
		totalPrice += ingredients[i].price; // increase total ingredient price
		ingredientTable.append(toAppend);
	}


	// append total price and confirm button
	var toAppend = "<tr><td><button type='button' id='confirmDish'>Confirm Dish</button></td><td></td><td>SEK " + totalPrice + "</td>";
	ingredientTable.append(toAppend);
	
}
