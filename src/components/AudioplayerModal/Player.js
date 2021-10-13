import React from "react";
import './style.css';

const Player = ({ file,deleteAudio }) => {
  return (
    <>
  <audio controls loop src={file}/>
    <button className='delete-btn' onClick={deleteAudio}>Delete File</button>
    </>
  );};

export default Player;
