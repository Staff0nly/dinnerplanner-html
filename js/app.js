$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var firstView = new FirstView($("#startWindow"), model);
	var sideView = new SideView($("#sidebar"), model);
	var selectView = new SelectView($("#dishes1"), model);
	var selectView2 = new SelectView2($("#dishes2"), model);
	var dishView = new DishView($("#dish"), model);
	var prepView = new PrepView($("#prepViewID"), model);
	var finalView = new FinalView($("#finalViewID"), model);
});
