import { useState } from "react";

const FormObject = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: ""
  });

  //? object destr.
  const { username, password, email } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("Submitted");
    alert(`username : ${username}
email : ${email}
password : ${password}
    `);
    setFormValues({
      username: "",
      email: "",
      password: ""
    })
  };

  const handleForm = (e) => {
    console.log(e.target.value);
    console.log(e.target.id);
    setFormValues({...formValues, [e.target.id]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="display-5 text-danger">FORM OBJECT</h1>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username : <span className="text-danger">{username}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={handleForm}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email : <span className="text-danger">{email}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={handleForm}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={handleForm}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormObject;
