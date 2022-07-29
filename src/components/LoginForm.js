import React, { useState } from 'react'
// import '../index.css'
// import dataList from "../data.json"
function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = e => {
    e.preventDefault();
    Login(details);
  }
  return (
    // <form onSubmit={submitHandler}>
    //     <div className='form-inner'>
    //         <h2>Login</h2>
    //         {(error !== "") ? (<div className='error'>{error}</div>) : ""}
    //         <div className= 'form-group'>
    //             <label htmlFor='name'> Name: </label>
    //             <input type="text" name = "name" id = " name"  onChange={e => setDetails({...details, name : e.target.value})} value = {details.name}/>
    //         </div>
    //         <div className= 'form-group'>
    //             <label htmlFor='email'> Email: </label>
    //             <input type="email" name = "email" id = " email" onChange={e => setDetails({...details, email : e.target.value})} value = {details.email}/>
    //         </div>
    //         <div className= 'form-group'>
    //             <label htmlFor='password'> Password: </label>
    //             <input type="password" name = "password" id = " password" onChange={e => setDetails({...details, password : e.target.value})} value = {details.password}/>
    //         </div>
    //         <div>
    //             <input type="submit" value = "LOGIN"/>
    //         </div>

    //     </div>
    // </form>
    <div className='d-flex justify-content-center align-items-center w-100 vh-100'>
      <form onSubmit={submitHandler}>
        {(error !== "") ? (<div className='error'>{error}</div>) : ""}

        <div className='mb-3 col-12'>
          <label htmlFor="exampleInputName1" className="form-label"> Name: </label>
          <input type="text" className="form-control" id="exampleInputName1" aria-describedby="textHelp" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
        </div>
        <div className="mb-3 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3 col-12">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default LoginForm;