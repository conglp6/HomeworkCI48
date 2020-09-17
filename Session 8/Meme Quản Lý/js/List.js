import { BaseComponent } from "./BaseComponent.js";

const style = /*html*/ `
<style>
.form-group {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
}

.form-group > .form-control {
    width: 220px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    background: #FF723F;
    color: #ffffff;
    font-family: 'Pacifico', cursive;
    font-size: 20px;
    border-radius: 8px;
}

button:hover{
    opacity: 0.8;
}

.meme {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.meme >div, .meme>img {
    width: 200px;
    height: 200px;
    text-align: center;
    line-height: 200px;
    background: #f78c6c;
    color: #ffffff;
    font-family: 'Pacifico', cursive;
    font-size: 20px;
    border-radius: 10px;
}

div > #name {
    background-color: royalblue;
}
div > #datemodified {
    background-color: #949598;
}

#btn-edit {
    width: 100px;
    background-color:  #f78c6c ;
}

#btn-delete {
    width: 100px;
    background-color: #f78c56;
}
</style>`;

class List extends BaseComponent {
    constructor() {
        super();

        this.state = {
            memes: [
                { "is-editing": "false", 'name': 'Linkin Park HB', 'img': 'https://images-na.ssl-images-amazon.com/images/I/91NQO2l3RZL._SX522_.jpg', 'description': "Hybrid Theo", "date-modified": "2020/09/09" },
                { "is-editing": "false", 'name': 'Linkin Park M', 'img': 'https://i.pinimg.com/originals/dd/d2/39/ddd239f2c82a6523d2923ef1e2c633e9.jpg', 'description': "Meteora", "date-modified": "2020/09/11" },
                { "is-editing": "false", 'name': 'Linkin Park M2M', 'img': 'https://img.discogs.com/boVKY6NUukMjSLkKckOH-baBTCA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1896045-1264847031.jpeg.jpg', 'description': "M2M", "date-modified": "2020/09/12" },
                { "is-editing": "false", 'name': 'Linkin Park ATS', 'img': 'https://product.hstatic.net/1000304920/product/linkin_park_a_thousand_suns_di_a_cd_24cb496616544b11a1ade143e2c34ffe.png', 'description': "A Thousands Sun", "date-modified": "2020/09/06" },
            ]
        };
    }

    render() {
        let html = "";
        for (let meme of this.state.memes) {
            html += /*html*/`<meme-container is-editing="${meme["is-editing"]}" name="${meme.name}" img="${meme["img"]}" date-modified="${meme["date-modified"]}"></meme-container>`;
        }

        this._shadowRoot.innerHTML = /*html*/`

            ${style};
            <form id="form-add-meme">
                <div class="form-group">
                    <textarea class="form-control" name="name" placeholder="Enter name here"></textarea><br>
                    <textarea class="form-control" name="img" placeholder="Enter Link Image"></textarea><br>
                    <textarea class="form-control" name="description" placeholder="Enter Description"></textarea><br>
                    <input class="form-control" type="datetime-local" name="dateModified" placeholder="Date modified"><br>
                    <button class="form-control">Add meme</button>
                </div>
            </form>

            <div class="list">
                ${html}
            </div>
        `;

        this.$list = this._shadowRoot.querySelector('.list');
        this.$list.addEventListener('delete-meme', (event) => {
            this.deleteMeme(event.detail.name);
        });

        this.$list.addEventListener('edit-meme', (event) => {
            this.editMeme(event.detail.name);
        });

        this.$list.addEventListener('save-meme', (event) => {
            this.saveMeme(event.detail.oldName, event.detail.newName);
        })

        this.$formAddMeme = this._shadowRoot.getElementById('form-add-meme');
        this.$formAddMeme.onsubmit = (event) => {
            event.preventDefault();
            let newMeme = {
                "name": this.$formAddMeme.name.value,
                "img": this.$formAddMeme.img.value,
                "description": this.$formAddMeme.description.value,
                "date-modified": this.$formAddMeme.dateModified.value,
            };

            this.setState({
                memes: [
                    ...this.state.memes,
                    newMeme
                ]
            });
        }

    }

    editMeme(memeName) {
        this.setState({
            memes: this.state.memes.map(function (meme) {
                if (meme.name == memeName) meme["is-editing"] = 'true';
                return meme;
            })
        });
    }

    deleteMeme(memeName) {
        // lọc những memes có name không phải là memename truyền vào
        // let newmemes = this.state.memes.filter(function(meme) {
        //     return meme.name != memename;
        // });
        // // đặt lại memes của List
        // this.state.memes = newmemes;
        // this.setState(this.state);

        this.setState({
            memes: this.state.memes.filter(function (meme) {
                return meme.name != memeName;
            })
        });

    }

    saveMeme(oldName, newName, oldDesc, newDesc) {
        //tim meme có name là oldname
        let founMeme = this.state.memes.find(function (meme) {
            return meme.name == oldName, meme.descripton == oldDesc;
        });

        //gán lại name cho meme vừa tìm được
        founMeme.name = newName;
        founMeme.description = newDesc;

        //đổi trạng thái đang sửa về trạng thái bình thường
        founMeme["is-editing"] = false;

        this.setState(this.state);
    }
}

window.customElements.define('list-container', List);

// state: là những dữ liệu mà bản thân component có sẵn (ko truyền từ ngoài vào)
// props: là những dữ liệu mà được truyền từ ngoài vào, readonly
// state và props là thứ quyết định nội dung nằm bên trong 1 

// event: tạo 1 custom event