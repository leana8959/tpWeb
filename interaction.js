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
		const { x, y } = getMousePosition(canvas, event)
		this.initX = x;
		this.initY = y;
		interactor.onInteractionStart(this);
		// console.log(this);
	};

	this.onMouseMove = event => {
		interactor.onInteractionUpdate(this);
		// console.log(event);
	};

	this.onMouseUp = event => {
		const { x, y } = getMousePosition(canvas, event)
		this.finalX = x;
		this.finalY = y;
		interactor.onInteractionEnd(this);
		// console.log(this);
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

