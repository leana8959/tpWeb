const editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this); // This is passed to DnD. DnD calls these methods, which are callbacks

	this.onInteractionStart = dnd => {
		const { initX, initY, finalX, finalY } = dnd;
		switch (this.currEditingMode) {
			case editingMode.line:
				this.currentShape = new Line(this.currColour, this.currLineWidth,
					initX, initY, finalX, finalY)
				break;
			case editingMode.rect:
				const width = finalX - initX
				const height = finalY - initY
				this.currentShape = new Rectangle(this.currColour, this.currLineWidth,
					initX, initY, width, height)
				break;
		}

		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	};

	this.onInteractionUpdate = this.onInteractionStart;

	this.onInteractionEnd = _ => {
		drawing.addForm(this.currentShape);
		drawing.paint(ctx);
	};
};

