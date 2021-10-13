import React from "react";
import './style.css';

const User = ({handleClick,username, userEmail }) =>{
  return (
    <div className="card-flex-wrapper">
				<div className="card-flex-image">
					<img src='images/avatar.png' alt="avatar" />
				</div>
				<div className="card-flex-content">
					<h3>{username}</h3>
          <p>{userEmail}</p>
					<button  onClick ={handleClick} className="card-flex-button btn-block">Open audio popup</button>
				</div>
			</div>
  );
};

export default User;
