var React = require('react');

var Form = React.createClass({
  getInitialState: function(){
    return {text: ''};
  },

  handleTextChange: function (event) {
    this.setState({text: event.target.value});
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var text = this.state.text.trim();
    if (!text) {return;}
    this.props.onFormSubmit(text);
    this.setState({text: ''});
  },

  render: function () {
    return (
      <form
      className='search-form'
      onSubmit={this.handleSubmit}
      >

        <input
        type='text'
        placeholder='Enter name of actor...'
        value={this.state.text}
        onChange={this.handleTextChange}
        />
        <input type='submit' value='Find films'/>
      </form>
      );
  }

});

module.exports = Form;