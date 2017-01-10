var React = require('react');

var FilmList = React.createClass({

  getInitialState: function(){
    return {films: []};
  },

  render: function () {
    if(!this.props.films) {
      return<h4>No film selected</h4>
    };

    var films = this.props.films.map(function(film){
      return (
       <p>{film.show_title}</p>
       );
   });
  
  return (
    <div>{films}</div>
    );
}

});

module.exports = FilmList;
