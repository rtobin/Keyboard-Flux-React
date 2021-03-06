var Recorder = React.createClass({

  getInitialState: function () {
    var attributes = {name: "Pat", roll: []};
    return {isRecording: false,
    track: new Track(attributes)};
  },

  componentDidMount: function () {
    KeyStore.addChangeHandler(function () {
        if (this.state.isRecording) {

          this.state.track.addNotes(_playingKeys.slice());
        }
      }.bind(this)
    );
  },

  saveRecording: function () {
    //implement this!
  },

  startRecording: function () {
    this.setState({isRecording: true});
    this.state.track.startRecording();
  },

  stopRecording: function () {
    this.setState({isRecording: false});
    this.state.track.stopRecording();
  },

  playRecording: function () {
    this.state.track.play();
  },

  render: function() {
    return (
      <div className="recorder-buttons">
        <button className="start" onClick={this.startRecording}>Start</button>
        <button className="stop" onClick={this.stopRecording}>
          Stop
        </button>
        <button className="play" onClick={this.playRecording}>Play</button>
        <br/>
        <button className="save" onClick={this.saveRecording}>Save</button>
      </div>
    );
  }

});
