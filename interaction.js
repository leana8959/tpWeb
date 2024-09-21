// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.

function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	this.initX = 0;
	this.initY = 0;
	this.finalX = 0;
	this.finalY = 0;

	// Developper les 3 fonctions gérant les événements
	this.onMouseDown = event => {
		if (!isInCanvas(canvas, event))
			return;

		const { x, y } = getMousePosition(canvas, event)
		this.initX = x;
		this.initY = y;
		this.finalX = x;
		this.finalY = y;

		interactor.onInteractionStart(this);
	};

	this.onMouseMove = event => {
		if (!isInCanvas(canvas, event))
			return;

		if (event.buttons == 0)
			return; // not being held, return

		const { x, y } = getMousePosition(canvas, event)
		this.finalX = x;
		this.finalY = y;
		interactor.onInteractionUpdate(this);
	};

	this.onMouseUp = event => {
		if (!isInCanvas(canvas, event))
			return

		interactor.onInteractionEnd(this);
	};

	// Associer les fonctions précédentes aux évènements du canvas.
	addEventListener("mouseup", this.onMouseUp)
	addEventListener("mousedown", this.onMouseDown)
	addEventListener("mousemove", this.onMouseMove)
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
	const rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
};

function isInCanvas(canvas, event) {
	const rect = canvas.getBoundingClientRect();
	return (
		(rect.left <= event.x && event.x <= rect.right)
		&& (rect.top <= event.y && event.y <= rect.bottom)
	);
}

