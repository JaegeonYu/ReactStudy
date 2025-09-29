const React = require("react");
const { Component } = React;

class WordRelay extends React.Component {
  state = {
    word: "유재건",
    value: "",
    result: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "딩동댕",
        word: this.state.value,
        value: "",
      });
      this.input.focus();
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
    }
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };
  onRefInput = (c) => {
    this.input = c;
  };
  render() {
    return (
      <div>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmit}>
          <input
            ref={this.onRefInput}
            type="text"
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button>입력!</button>
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

module.exports = WordRelay;
