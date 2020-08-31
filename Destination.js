 export class Destination{
    name;
    images = [];
    dateModifiled;

    constructor(name){
        this.name = name;
        this.dateModified = new Date().toISOString();
    }

    set newImage(image){
        this.images.push(image);
    }

    get info(){
        return`
        Chào mừng các nà ní đến với danh thắng: ${this.name},
        Ảnh ọt mỹ lệ: ${this.images},
        Thời gian cập nhật: ${this.dateModifiled}
        `
    }
}
