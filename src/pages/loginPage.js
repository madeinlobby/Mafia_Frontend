import React from "react";
import TextInput from "../components/input.js";
import "./loginPage.css";
import icon from "../assets/logo.png";
import dictionary, { DictionaryComponent } from "../components/dictionary";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: window.language };
    window.language = props.language;
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  render() {
    return (
      <div style={{ textAlign: dictionary("alignment") }} className="loginPage">
        <header>
          <link rel="icon" href={icon} />
        </header>
        <DictionaryComponent
          onLangChange={this.changeLanguage}
          className="dictionary"
        />
        <Form />
      </div>
    );
  }

  changeLanguage(lang) {
    window.language = lang;
    this.setState({ language: window.language });
  }
}

class Form extends React.Component {
  render() {
    return (
      <div className="loginContainer">
        <div className="loginForm">
          <div style={{ minHeight: "300px" }}></div>
          <TextInput hint={"username"} type="text" />
          <TextInput type="password" hint={"password"} />
        </div>
      </div>
    );
  }
}
