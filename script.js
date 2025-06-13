// Car Constructor Function
function Car(make, model) {
	this.make = make;
	this.model = model;
}

// Add getMakeModel method to Car's prototype
Car.prototype.getMakeModel = function () {
	return `${this.make} $ {this.model}`;
};

// SportsCar constructor Function
function SportsCar(make, model, topSpeed) {
	// Call car constructor to initialize make and model
	Car.call(this, make, model);
	this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Set constructor reference back to sportscar
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpped = function () {
	return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;













