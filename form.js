class {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("City");
        this.greeting = createElement('h2');
        this.title = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
}

display() {
    this.title.html("Cyclone Detecter");
    this.title.position(displayWidth / 2 - 50, 0);

    // set input position
    this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
}