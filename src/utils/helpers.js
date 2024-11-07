const parseData = (data) => {
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

const getInitialsOfUserName = ({ name }) => {
  if (!name) return "-";
  const words = name.trim().split(" ");
  let initials = words[0].charAt(0).toUpperCase();

  if (words.length > 1) {
    initials += words[1].charAt(0).toUpperCase();
  }

  return initials;
};

export { parseData, getInitialsOfUserName };
