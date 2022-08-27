import * as components from "./components/indexComp.js";

class Container extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML=`
        <my-post profileimg=".././images/perfil.png" name="DarkseaEd1t2" ubication="Cali" post=".././images/perfil.png" views="50 views" description="¡¡¡DakseaEd1t2 ha actualizado su foto de perfil!!!"></my-post>
        <my-post profileimg=".././images/perfil.png" name="DarkseaEd1t2" ubication="Cali" post=".././images/perfil.png" views="50 views" description="¡¡¡DakseaEd1t2 ha actualizado su foto de perfil!!!"></my-post>
        `
    }
}
customElements.define("app-content", Container);
console.log('holis')