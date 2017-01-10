var React = require('react');
var Form = require('../components/Form.jsx');
// var FilmList = require('../components/FilmList.jsx');

var NetflixContainer = React.createClass({
  getInitialState: function(){
    return {
      films: []
    };
  },

  render: function () {
    return (
        <div className='Netflix'>
          <Form />
          <FilmList />
        </div>
      )
  }



});

module.exports = NetflixContainer;
