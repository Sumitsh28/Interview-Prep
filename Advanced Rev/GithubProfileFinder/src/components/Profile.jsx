import React, { useEffect, useState } from "react";

const Profile = ({ user }) => {
  const [info, setInfo] = useState([]);
  async function fetchData() {
    try {
      const response = await fetch(`https://api.github.com/users/${user}
    `);

      const data = await response.json();

      console.log(data);

      if (data) {
        setInfo(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [info]);

  // console.log(d);
  return (
    <div className="flex flex-col">
      <div>Profile of: {user}</div>
      <div>
        <img src={info.avatar_url} className="h-20 w-20" />
      </div>
    </div>
  );
};

export default Profile;
