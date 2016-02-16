//ExampleView Object constructor
var SideView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests span");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.menu = container.find("#menu");
	this.totalCost = container.find("#totalCost");
	this.confirmDish = container.find("#confirmDish");
	
	this.numberOfGuests.html(model.getNumberOfGuests());
}
 
