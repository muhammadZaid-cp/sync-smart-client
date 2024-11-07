import React from "react";

import { getInitialsOfUserName } from "../../utils/helpers";

const UserAvatar = ({ userName }) => {
  const name = getInitialsOfUserName({ name: userName });

  const avatarStyle = {
    width: name.length === 1 ? "30px" : "40px",
    height: name.length === 1 ? "30px" : "35px",
    borderRadius: "50%",
    backgroundColor: "#00008B",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: name.length === 1 ? "24px" : "20px",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  return <div style={avatarStyle}>{name}</div>;
};

export default UserAvatar;
