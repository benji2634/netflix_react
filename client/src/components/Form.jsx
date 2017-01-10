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
    var text = this.state.author.trim();
    if (!text) {return;}
    this.props.onFormSubmit({text: text});
    var url='http://netflixroulette.net/api/api.php?actor=' + {text};
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      //TO DO send data up to top level
      this.setState({films: data});
    }.bind(this);
    request.send();




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