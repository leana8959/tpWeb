// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

function setStyle(obj, ctx) {
	ctx.strokeStyle = obj.color;
	ctx.lineWidth = obj.thickness;
}

Rectangle.prototype.paint = function(ctx) {
	setStyle(this, ctx);
	ctx.stroke;
	ctx.beginPath();
	ctx.rect(this.originX, this.originY, this.originX + this.width, this.originY + this.height);
	ctx.stroke();
};

Line.prototype.paint = function(ctx) {
	setStyle(this, ctx);
	ctx.beginPath();
	ctx.moveTo(this.startX, this.startY);
	ctx.lineTo(this.endX, this.endY);
	ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
	ctx.fillStyle = '#F0F0F0';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	this.getForms().forEach(form => {
		form.paint(ctx);
	});
};

