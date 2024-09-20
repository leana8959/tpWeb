// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
//


Rectangle.prototype.paint = function(ctx) {
	ctx.strokeStyle(this.color)
	ctx.beginPath();
	ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(), this.getFinalY());
	ctx.stroke();
};

Line.prototype.paint = function(ctx) {
	ctx.strokeStyle(this.color)
	ctx.beginPath();
	ctx.moveTo(this.getInitX(), this.getInitY());
	ctx.lineTo(this.getFinalX(), this.getFinalY());
	ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
	ctx.fillStyle = '#F0F0F0';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	this.getForms().forEach(form => form.paint(ctx));
};

