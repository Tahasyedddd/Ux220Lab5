class CenterHtml extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}

customElements.define("x-center",CenterHtml);

class Redtml extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="color:red">${this.innerHTML}</div>`;
    }
}

customElements.define("x-red",red.html);