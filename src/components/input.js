import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import dictionary from "./dictionary";
import "./components.css";
export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hint: props.hint,
      text: "",
      type: props.type,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div className="inputContainer">
        <div>{dictionary(this.state.hint)}</div>
        <input
          type={this.state.type}
          value={this.state.text}
          onChange={this.handleChange}
        />
      </div>
    );
  }
  getValue() {
    return this.state.text;
  }
}
TextInput.prototypes = {
  hint: PropTypes.string,
  type: PropTypes.string.isRequired,
};
