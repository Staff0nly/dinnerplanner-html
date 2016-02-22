var SelectView = function (container, model) {
	
	var dishList = container.find("#dishList");

	var dishArray = model.getFullMenu();

	for(var i = 0;i<dishArray.length;i++){
		var toAppend = "<li><div class='col-md-10'><div class='dishimage'><img src='images/" + dishArray[i].image + "'></div><div class='dishname'><h3>" + dishArray[i].name + "</h3></div><p>"+ dishArray[i].description + "</p></div></li>";

		dishList.append(toAppend);
	}

}
 
