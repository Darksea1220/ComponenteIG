class MyPost extends HTMLElement{
    static get observedAttributes(){
        return["profileimg","name","ubication","post","views","description"];
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    connectedcallback(){
        this.render();
    }
    attributeChangedCallback(propName,oldValue,newValue){
        this[propName]=newValue;
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML=`
        <section>
        <link rel="stylesheet" href="./src/components/insta/insta.css">
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300&display=swap" rel="stylesheet">
            <div class="base">
                <div class="head">
                    <div class="profile">
                        <img class="photo" src="${this.profileimg}"></img>
                        <div id="name">
                            <div class="nam">${this.name}</div>
                            <div class="nam" id="dir">${this.ubication}</div>
                        </div>
                    </div>

                    <div class="dots">
                        <img src=".././images/dots.png"></img>
                    </div>
                </div>

                <div class="post">
                <img class="ppost" src="${this.post}"></img>
                </div>
                <div class="icons">
                    <div class="lcs">
                        <img src=".././images/heart.png"></img>
                        <img class="space" src=".././images/chat.png"></img>
                        <img src=".././images/send.png"></img>
                     </div>
                    <img class="position" src=".././images/dots2.png"></img>
                    <img src=".././images/save.png"></img>
                </div>
                <div class="comments">
                    <div class="footer">${this.views}</div>
                    <div class="footer"><p class="descrip">${this.description}</div>
                </div>
            </div>
        </section>
        `
    }
}
customElements.define("my-post", MyPost)
export default MyPost;
