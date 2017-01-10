var React = require('react');
var Form = require('../components/Form.jsx');
var FilmList = require('../components/FilmList.jsx');

var NetflixContainer = React.createClass({
  getInitialState: function(){
    return {
      films: []
    };
  },

  render: function () {
    return (
        <div className='Netflix'>
          <Form onFormSubmit={this.handleFormSubmit}/>
          <FilmList />
        </div>
      )
  },

  handleFormSubmit: function (text) {
    var url='http://netflixroulette.net/api/api.php?actor=' + text;
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      //TO DO send data up to top level
      this.setState({films: data});
    }.bind(this);
    request.send();
  }



});

module.exports = NetflixContainer;
