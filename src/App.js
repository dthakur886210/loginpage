import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import data from "./data.json"

// import './index.css';
function App() {

  const newArray = []
  const adminUser = {
    email: "deepak@softobotics.com",
    password: "Softobotics123@"
  }
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const Login = details => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email
      })
    }
    else {
      console.log("Details donot match");
      setError("Details donot match!!!")
    }
  }
  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" })
  }
  return (
    <div className="App">
      {(user.email !== "") ?
        (<div>
          <h2> Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>) :
        (
          <LoginForm Login={Login} error={error} />
        )

      }


      {
        newArray.push({
          "id": 3,
          "name": "Ramu1",
          "company": "softobotics1"
        })
      }
      {console.log(newArray)}
    </div>
  );
}

export default App;
