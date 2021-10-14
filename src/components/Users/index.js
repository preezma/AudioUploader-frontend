import React, { useEffect, useState } from "react";
import { getUsers } from "../../api";
import User from "./User";
import Loader from "../Loader";
import "./style.css";
import AudioplayerModal from "../AudioplayerModal";

const UsersCards = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openModal, toggleModal] = useState(false);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((res) => setUserList(res.data))
      .catch((err) => console.log('error', err.message))
      .finally(setLoading(false));
  }, []);

  const openAudioModal = (id) => {
    toggleModal(true);
    setUserId(id);
  };
  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="card-content">
        <div className="card-heading">
          <h1>USERS</h1>
        </div>
        {userList.map((user) => (
          <User
            key={user._id}
            handleClick={() => openAudioModal(user._id)}
            username={user.name}
            userEmail={user.email}
          />
        ))}
      </div>
      {openModal && <AudioplayerModal toggleModal={toggleModal} id={userId} />}
    </>
  );
};

export default UsersCards;