import React, {  useState } from "react";
import { useMutation } from 'react-query';
import { API } from '../../config/api';
import { Alert } from 'react-bootstrap';


const Formregister = () => {

  
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const {name, email, password} = form;

  const handleChange = (e) => {
    setForm ({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
  
      // Configuration Content-type
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
  
      // Data body
      const body = JSON.stringify(form);
  
      // Insert data user to database
      const response = await API.post('/register', body, config);
      console.log(response);

      if (response.data.status === "Success"){
        const alert = (
          <Alert variant="success" className="py-1">
            Register Berhasil
          </Alert>
        );
        setMessage(alert);
        setForm ({
          name : "",
          email : "",
          password : ""
        })
      }else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }

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
          <strong>Register</strong>
        </h1>
        {message && message}
        <input name="name" value={name} onChange = {handleChange} type="text" className="form-control py-3 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" style={{}}></input>
        <input name="email" value={email} onChange = {handleChange} type="email" className="form-control py-3 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" style={{}}></input>
        <input name="password" value={password} onChange = {handleChange} type="password" id="inputPassword5" className="form-control py-3 mb-5" aria-describedby="passwordHelpBlock" placeholder="Password"></input>
        <button  className="btn btn-danger py-3" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Formregister;
