export default class Section{
    constructor({ renderer}, containerSelector){
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    setItem(element, isGrid){
        if(isGrid){
            this._container.append(element);
        } else {
            this._container.prepend(element);
        }
    }

    renderItems(data/*, userId*/){
        data.forEach(item => {
            this._renderer(item/*, userId*/);
        })
    }
}