// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

function setStyle(obj, ctx) {
	ctx.strokeStyle = obj.color;
	ctx.lineWidth = obj.thickness;
}

Rectangle.prototype.paint = function(ctx) {
	setStyle(this, ctx);
	ctx.stroke;
	ctx.beginPath();
	ctx.rect(this.originX, this.originY, this.width, this.height);
	ctx.stroke();
};
Rectangle.prototype.show = function() {
	return `Rectangle(${this.originX}, ${this.originY}, ${this.width}, ${this.height})`
}

Line.prototype.paint = function(ctx) {
	setStyle(this, ctx);
	ctx.beginPath();
	ctx.moveTo(this.startX, this.startY);
	ctx.lineTo(this.endX, this.endY);
	ctx.stroke();
};
Line.prototype.show = function() {
	return `Line(${this.startX}, ${this.startY}, ${this.endX}, ${this.endY})`;
}

Drawing.prototype.paint = function(ctx) {
	ctx.fillStyle = '#F0F0F0';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	this.getForms().forEach(form => {
		form.paint(ctx);
	});
};

function updateFormList(forms) {
	const htmlGen = forms.map((form, i) => {
		return `<button type="button" class="btn btn-default" onclick="pencil.onDeleteForm(${i})">
			<span class="glyphicon glyphicon-remove-sign">${form.show()}</span>
		</button>`
	}).reduce((a, b) => a + b, "")

	document.getElementById("shapeList").innerHTML = htmlGen
}
