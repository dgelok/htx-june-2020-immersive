
class Button {
    constructor(domElement, bgcolor, text) {
        this.state= {
            domElement: domElement,
            bgcolor: bgcolor,
            text: text,
            count: 0,
        }
    }

    createButton() {

        let button = document.createElement('button');
        button.textContent = this.state.text;
        button.style.backgroundColor = this.state.bgcolor;
        button.addEventListener('click', ()=>{
            this.state.count += 1;
            button.textContent = `${this.state.text} ${this.state.count}`;
        })
        this.state.domElement.appendChild(button);
    }

    render() {
        this.createButton();
    }
}