export default class Api{
    constructor({address, token}){
        this._address = address;
        this._token = token;
    }

    _response(){
        return res => res.ok ? res.json() : Promise.reject(`Ошибка ${result.status}`)
    }

    getUserInfo(){
        return fetch(`${this._address}/users/me`, {
            headers: {
                authorization: this._token
            }
        })
        .then(this._response())
    }

    getInitialCards(){
        return fetch(`${this._address}/cards`, {
            headers: {
                authorization: this._token
            }
        })
        .then(this._response())
    }

    changeUserInfo(data){
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about

            })
        })
        .then(this._response())
    }

    changeUserAvatar(data){
        return fetch(`${this._address}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization:this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
        .then(this._response())
    }

    addCard(data){
        return fetch(`${this._address}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.mesto,
                link: data.link
            })
        })
        .then(this._response())
    }

    removeCard(id){
        return fetch(`${this._address}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
        .then(this._response())
    }

    setLike(id){
        return fetch(`${this._address}/cards/likes/${id}`,{
            method: 'PUT',
            headers: {
                authorization: this._token
            }
        })
        .then(this._response())
    }

    removeLike(id){
        return fetch(`${this._address}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
        .then(this._response())
    }
}