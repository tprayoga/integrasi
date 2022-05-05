import { Alert } from 'react-bootstrap';
import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import { API } from "../../config/api";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const Formlogin = () => {

  const [state, dispatch] = useContext(UserContext);
  console.log(state);

  let navigate = useNavigate ()

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(form);

      // Insert data user to database
      const response = await API.post("/login", body, config);
      console.log(response);

      if(response.data.status === "Success"){
        dispatch({
          type:'LOGIN_SUCCESS',
          payload: response.data.data.user
        })
      }

      if (response.data.status === "Success") {
        navigate("/admin-complain")
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }
      setMessage('Berhasil')

      // Handling response here
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Gagal
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  const [message, setMessage] = useState(null);
  return (
    <div className="container card text-white bg-dark p-3 col-md-4 md-text-center m-5">
      <form className="card-body d-grid" onSubmit={(e) => handleSubmit.mutate(e)}>
        <h1 className="mb-5">
          <strong>Login</strong>
        </h1>
        {message && message}
        <input
          name="email"
          value={email}
          onChange={handleChange}
          type="email"
          className="form-control py-3 mb-3"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
          style={{}}
        ></input>
        <input
          name="password"
          value={password}
          onChange={handleChange}
          type="password"
          id="inputPassword5"
          className="form-control py-3 mb-5"
          aria-describedby="passwordHelpBlock"
          placeholder="Password"
        ></input>
        <button className="btn btn-danger py-3" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Formlogin;
