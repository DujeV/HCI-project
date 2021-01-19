import React, { useState } from "react"
import Modal from "react-modal"
import { navigate } from "gatsby"
import { users } from "../../constants/const"
import { myLocalStorage } from "./helper"

const Login = ({ isModalOpen, closeModal, UpdatingUser }) => {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = () => {
    setError(false)
    setLoading(true)
    setTimeout(() => {
      const loginSuccessful = !!users.find(
        user => user.username === username && user.password === password
      )
      setLoading(false)
      if (loginSuccessful) {
        myLocalStorage.setItem("loggedIn", username)
        setError("Success")
        UpdatingUser()
        closeModal()
        return navigate("/")
      }
      setError("Wrong username or password")
    }, 2000)
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={{
        content: {
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
          background: "#fff",
          width: "300px",
          height: "300px",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          boxShadow: '0px 15px 20px rgba(0, 0, 0, 0.1)',
          outline: "none",
        },
      }}
      shouldCloseOnEsc={true}
    >
      <div className="wrapper">
      <div className="loginTitle">
Login Form</div>
<form action="#">
        <div className="field">
          <input type="text" required onChange={e => setUserName(e.target.value)} />
          <label>Username</label>
        </div>
<div className="field">
          <input type="password" required  onChange={e => setPassword(e.target.value)}/>
          <label>Password</label>
        </div>

<div className="field">
          {/* <input type="submit" value="Login" onClick={() => submit()}/> */}

          <button  type="submit" className="loginButton" onClick={() => submit()}>
          {loading ? "Loading..." : "Login"}
        </button>
        </div>
        <div className="signup-link">
Don't have an account? <a href="#">Please signup</a>

</div>
<p className={`${error !== "Success" ? 'error' : 'success'} ${error ? 'show': ''}`}>{error}</p>
</form>
</div>

    </Modal>
  )
}

export default Login
