export default class UserInfo{
    constructor(name, about, avatar){
        this._name = name;
        this._profession = about;
        this._avatar = avatar;
    }

    getUserInfo(){
        return {
            name: this._name.textContent,
            about: this._profession.textContent
        }
    }

    setUserInfo({name, about}){
        this._name.textContent  = name;
        this._profession.textContent = about;
    }

    setUserAvatar({avatar}){
        this_avatar.src = avatar;
    }
}