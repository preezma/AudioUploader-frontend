import React, { useState, useRef } from "react";
import { uploadFile, deleteFile, changeFile } from "../../api";
import Player from "./Player";
import Loader from "../Loader";
import "./style.css";
import Modal from "../Modal";

const url = process.env.REACT_APP_API_URL;
const AudioplayerModal = ({ user, toggleModal }) => {
  const [file, setFile] = useState(null);
  const [audio, setAudio] = useState(user.audio);
  const [loading, setLoading] = useState(false);
  const ref = useRef();

  function upload(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    let result;
    if (user.audio === "") {
      result = uploadFile(user._id, formData);
    } else {
      result = changeFile(user._id, formData);
    }
    setLoading(true);
    result
      .then((res) => {
        setAudio(res.data.audio);
        setFile(null);

      })
      .catch((err) => {
        console.log("error", err);
      })
      .finally(() => setLoading(false));
  }
  const reset = () => {
    ref.current.value = "";
  };
  const handleDeleteAudioFile = (audio) => {
    deleteFile(audio).then(() => 
    {
      setAudio("");
      reset();
    });
  };
  return (
    <Modal show={true} handleClose={() => toggleModal(false)}>
      <div className="upload-section">
        <h1>Hi {user.name},</h1>
        <h2> Here you can upload and listen you audio file</h2>
        <form>
          <input
            type="file"
            className="choose-button"
            accept="audio/mp3,audio/*;capture=microphone"
            onChange={(e) => setFile(e.target.files[0])}
            ref={ref}
          />
          <div>
            <input
              type="button"
              className="upload-button"
              onClick={upload}
              value='Upload'
              disabled={file===null}
            />
          </div>
        </form>
        {loading && <Loader />}
        {audio && (
          <Player
            file={`${url}/audio/${audio}`}
            deleteAudio={handleDeleteAudioFile(user._id)}
          />
        )}
      </div>
    </Modal>
  );
};

export default AudioplayerModal;
