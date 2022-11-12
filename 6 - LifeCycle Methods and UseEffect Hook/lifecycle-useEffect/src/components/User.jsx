import { useState, useEffect } from "react";

const User = () => {
  const [user, setUser] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };

  useEffect(() => {
    //? componenetDidMount()
    getUser();
  }, [])

  console.log(user);
  const { name, dob, email, picture } = user;

  return (
    <div>
        {/* Optional Chaining */}
        {/* name?.first?.second */}
      <h1>{name?.first} {name?.last}</h1>
      <img className="rounded-circle mt-4" src={picture?.large} alt="img" />
      <p className="mt-4">{email}</p>
      <h5 className="text-dark mt-4">Birthday</h5>
      <h5>{new Date(dob?.date).toLocaleDateString("tr-TR")}</h5>
      <button className="btn btn-danger mt-4" onClick={getUser}>
        Get User
      </button>
    </div>
  );
};

export default User;
