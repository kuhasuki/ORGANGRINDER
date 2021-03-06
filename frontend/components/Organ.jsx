var KeyStore = require('../stores/KeyStore.js');
var React = require('react');
var Key = require('./Key.jsx');
var Jukebox = require('./Jukebox.jsx');
var KEYMAP = require('../constants/KeyMap.js');
var Recorder = require('./Recorder.jsx');

var Organ = React.createClass({
  getInitialState: function(){
    var notes = Object.keys(KEYMAP).map(function(key){
      return KEYMAP[key];
    });

    return({notes: notes});
  },

  render: function(){
    console.log(this.state.notes);
    return(
      <div>
      {
        this.state.notes.map(function(name){
          return(<Key noteName={name} key={name} />);
        })
      }
      <Recorder />
      <Jukebox />

    </div>
  );
  }
});

module.exports = Organ;
