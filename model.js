// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Shape(color, thickness) {
	this.color = color;
	this.thickness = thickness;
}

function Line(color, thickness, startX, startY, endX, endY) {
	Shape.call(this, color, thickness);
	this.startX = startX;
	this.startY = startY;
	this.endX = endX;
	this.endY = endY;
}
Line.prototype = Shape;

function Rectangle(color, thickness, originX, originY, width, height) {
	Shape.call(this, color, thickness);
	this.originX = originX;
	this.originY = originY;
	this.width = width;
	this.height = height;
}
Rectangle.prototype = new Shape();

function Drawing() {
	this.forms = [];

	this.getForms = () => {
		return this.forms;
	}

	this.addForm = form => {
		return this.forms.push(form)
	}
}
