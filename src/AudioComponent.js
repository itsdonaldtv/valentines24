import React from 'react';
import AudioPlayer from 'react-audio-player';
import audio from '../src/LaufeyVal.mp3'

const AudioPlayerComponent = () => {
  return (
    <div>
      <h2></h2>
      <AudioPlayer
        volume={0.313}
        src={audio} // Replace with your actual MP3 file path
        autoPlay={true} // Set to true if you want the audio to play automatically
      />
    </div>
  );
};

export default AudioPlayerComponent;