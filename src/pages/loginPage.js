import React from "react";
import TextInput from "../components/input.js";
import "./loginPage.css";
import logo from "../assets/logo-HDPI.png";
import pistolRight from "../assets/icons/pistolRight.png";
import pistolLeft from "../assets/icons/pistolLeft.png";
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
          <img src={logo} style={{ maxHeight: "200px", maxWidth: "400px" }} />
          <div className="center">
            <TextInput hint={"username"} type="text" />
            <TextInput type="password" hint={"password"} />
            <div>
              <button type="submit" className="submitButton">
                <img src={pistolLeft} className="pistolImg" />
                <text style={{ marginBottom: "2px" }}>&nbsp;Login&nbsp;</text>
                <img src={pistolRight} className="pistolImg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
