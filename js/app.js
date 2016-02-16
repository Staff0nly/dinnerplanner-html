$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var firstView = new FirstView($("#startWindow"), model);
	var sideView = new SideView($("#sidebar"), model);

});