export const Audio = {
  _getContext: function() {
    try {
      return (
        (AudioContext && new window.AudioContext()) ||
        new window.webkitAudioContext()
      );
    } catch (e) {
      console.log("Your browser can not support Web Audio API");
    }
    return null;
  },

  play(buffer) {
    let context = this._getContext();
    let source = context.createBufferSource();
    context.decodeAudioData(buffer, function(decodedData) {
      source.buffer = decodedData;
      source.connect(context.destination);
      source.start(0);
    });
  }
};
