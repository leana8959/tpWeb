// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Line(color, thickness, startX, startY, endX, endY) {
	Shape.call(color, thickness);
	this.startX = startX;
	this.startY = startY;
	this.endX = endX;
	this.endY = endY;
}
Line.prototype = new Shape();

function Rectangle(originX, originY, width, height) {
	Shape.call(color, thickness);
	originX = 0;
	originY = 0;
	width = 0;
	height = 0;
}
Rectangle.prototype = new Shape();

function Shape(color, thickness) {
	this.color = color;
	this.thickness = thickness;
}

function Drawing() {
	this.forms = [];

	this.getForms = () => {
		return forms;
	}
}
