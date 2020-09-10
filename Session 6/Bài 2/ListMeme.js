import {BaseComponent} from './BaseComponent.js';

class ListMeme extends BaseComponent{
    constructor(){
        super();

        this.state = {
            list:[
                {'name': 'Linkin Park HB','img':'https://images-na.ssl-images-amazon.com/images/I/91NQO2l3RZL._SX522_.jpg' ,'description': "Hybrid Theo", "datemodified": "2020/09/09"},
                {'name': 'Linkin Park M','img':'https://i.pinimg.com/originals/dd/d2/39/ddd239f2c82a6523d2923ef1e2c633e9.jpg' ,'description': "Meteora", "datemodified": "2020/09/11"},
                {'name': 'Linkin Park M2M','img':'https://img.discogs.com/boVKY6NUukMjSLkKckOH-baBTCA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1896045-1264847031.jpeg.jpg' ,'description': "M2M", "datemodified": "2020/09/12"},
                {'name': 'Linkin Park ATS','img':'https://product.hstatic.net/1000304920/product/linkin_park_a_thousand_suns_di_a_cd_24cb496616544b11a1ade143e2c34ffe.png' ,'description': "A Thousands Sun", "datemodified": "2020/09/06"},
            ],};
    }
    render(){

        let html = "";
        for ( let data of this.state.list){
            html += `<meme-container name="${data.name}" img="${data.img}" 
             description="${data.description}" datemodified="${data.datemodified}">
            </meme-container> `
        }

        this._shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./css/meme.css">
            <div class="main">
                <div class="size">
                    <form id="form-add-task">
                     <div class="form-group">
                        <textarea class="form-control"  name="name" placeholder="Name"></textarea>
                        <br>
                        <br>
                        <input class="form-control" type="text" name="img" placeholder="Link image"> 
                        <br>
                        <input class="form-control" type="text" name="description" placeholder="Description " >
                        <br>
                        <input class="form-control" type="datetime-local" name="datemodified" placeholder="Date modified" >
                        <br>
                        <button class="form-control">Add Meme</button>
                    </div> 
                    </form>
                </div>
                    <div class="list">
                        ${html}
                    </div>
            </div>
        `;    

        this.$formAdd = this._shadowRoot.getElementById("form-add-task");
        this.$formAdd.onsubmit = (event) => {
            event.preventDefault();
            let newMeme = { 
                "name" : this.$formAdd.name.value,
                "img": `${this.$formAdd.img.value}`,
                "description": this.$formAdd.description.value,
                "datemodified" : this.$formAdd.datemodified.value,
            }
            this.state.list.push(newMeme);
            this.render();
        }
    }

}

window.customElements.define("list-container",ListMeme)