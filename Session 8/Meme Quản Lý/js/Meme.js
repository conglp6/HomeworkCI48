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
    margin-top: 40px;
}

.meme >div, .meme>img {
    width: 220px;
    height: 220px;
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
div > #date-modified, div > #description {
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

class Meme extends BaseComponent {
    constructor() {
        super();
        // vì nội dung của 1 Meme do thuộc tính quyết đinh
        // mà thuộc tính được truyền từ ngoài vào -> props
        this.props = {
            "name": '',
            "img": '',
            "description": '',
            "is-editing": true,
            "date-modified": ''
        };
    }

    static get observedAttributes() {
        return ['name', 'img', 'description', 'date-modified', 'is-editing'];
    }

    render() {
        let nameEditable = (this.props["is-editing"] != 'false')
            ? `<textarea id="edit-name">${this.props.name}</textarea>`
            : this.props.name;

        let imgEditable = (this.props["is-editing"] != 'false')
            ? `<textarea id="edit-img">${this.props.img}</textarea>`
            : this.props.img;

        let descEditable = (this.props["is-editing"] != 'false')
            ? `<textarea id="edit-description">${this.props.description}</textarea>`
            : this.props.description;

        let dateEditable = (this.props["is-editing"] != 'false')
            ? `<input type="datetime-local" id="edit-date-modified" value="${this.props["date-modified"]}">`
            : this.props["date-modified"];

        let btnEdit = (this.props["is-editing"] != 'false')
            ? '<div id="btn-save">Save</div>'
            : '<div id="btn-edit">Edit</div>';

        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <div class="meme">
                <div id="name">${nameEditable}</div>
                <img src=${imgEditable}>
                <div id="description">${descEditable}</div>
                <div id="date-modified">${dateEditable}</div>
                ${btnEdit}
                <div id="btn-delete">Delete</div>
            </div>`;

        if (this.props['is-editing'] != 'false') {
            //nếu đang sửa -> có nút save -> bắt sự kiện nút save
            this.$btnSave = this._shadowRoot.getElementById('btn-save');
            this.$btnSave.onclick = (event) => {
                let saveMeme = new CustomEvent('save-meme', {
                    bubbles: true,
                    detail: {
                        oldName: this.props.name,
                        newName: this._shadowRoot.getElementById('edit-name').value
                    }
                });
                this.dispatchEvent(saveMeme);
            }
        } else {
            //nếu đang để bình thường -> edit -> bắt sự kiện nút edit
            this.$btnEdit = this._shadowRoot.getElementById('btn-edit');
            this.$btnEdit.onclick = (event) => {
                let editMeme = new CustomEvent('edit-meme', {
                    bubbles: true,
                    detail: {
                        name: this.props['name']
                    }
                });

                this.dispatchEvent(editMeme);
            }
        }

        this.$btnDelete = this._shadowRoot.getElementById('btn-delete');
        this.$btnDelete.onclick = (event) => {
            // console.log('vừa xóa 1 Meme rồi đấy');
            //định nghĩa & phát ra sự kiện deleteMeme
            let deleteMeme = new CustomEvent('delete-meme', {
                bubbles: true,
                detail: {
                    name: this.props['name']
                }
            });

            this.dispatchEvent(deleteMeme);
        }


    }
}

window.customElements.define('meme-container', Meme);

// khi mà bấm vào delete của 1 Meme -> phát ra 1 event gọi là deleteMeme 
// event deleteMeme được nổi lên List -> List có 1 listener để xử lý event deleteMeme