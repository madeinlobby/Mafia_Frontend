import React from "react";
import TextInput from "../components/input.js";
import './loginPage.css'
import dictionary,{DictionaryComponent} from "../components/dictionary";
export default class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={language:window.language}
        window.language=props.language
    }
    render() {
        return(<div className='loginPage'>
            <DictionaryComponent/>
            <TextInput type='text' hint={dictionary('username')}/>
        </div>)
    }
}
