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
  const [user, setUser] = useState({});

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((res) => setUserList(res.data))
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, []);

  const openAudioModal = (user) => {
    toggleModal(true);
    setUser(user);
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
            handleClick={() => openAudioModal(user)}
            username={user.name}
            userEmail={user.email}
          />
        ))}
      </div>
      {openModal && <AudioplayerModal toggleModal={toggleModal} user={user} />}
    </>
  );
};

export default UsersCards;
