export default class Api{
    constructor({address, token}){
        this._address = address;
        this._token = token;
    }

    getUserInfo(){
        return fetch(`${this._address}/users/me`, {
            headers: {
                authorization: this._token
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${result.status}`))
    }

    getInitialCards(){
        return fetch(`${this._address}/cards`, {
            headers: {
                authorization: this._token
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${result.status}`))
    }

    changeUserInfo(data){
        return fetch(`${this.address}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                profession: data.profession
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${result.status}`))
    }

    addCard(data){
        return fetch(`${this.address}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${result.status}`))
    }

    removeCard(id){
        return fetch(`${this._address}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${result.status}`))
    }
}