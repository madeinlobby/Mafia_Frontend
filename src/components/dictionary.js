import React from "react";

const englishDictionary = {
    username:'Username',
    password:'password',
    firstName:'First name',
    lastName:'Last name',
    email:'E-mail',
    phoneNumber:'Phone number'
}
const persianDictionary = {
    username:'نام کاربری',
    password:'رمز عبور',
    firstName:'نام',
    lastName:'نام خانوادگی',
    email:'پست الکترونیکی',
    phoneNumber:'شماره موبایل'
}
export default function getWord(key) {
    if (window.language ==='fa')
        return persianDictionary[key]

    else
        return englishDictionary[key]
}
export function renderComponent() {
    return(<div>
        <button onClick={()=>window.language = 'en'}><span className="flag-icon flag-icon-us"/></button>
        <button onClick={()=>window.language = 'fa'}><span className="flag-icon flag-icon-us"/></button>
    </div>)
}
