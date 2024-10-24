import React from "react";

const UserAvatar = ({ userName }) => {
  const firstLetter = userName ? userName.charAt(0).toUpperCase() : "?";

  const avatarStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#4040FF",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  return <div style={avatarStyle}>{firstLetter}</div>;
};

export default UserAvatar;
