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
          border: "1px solid #ccc",
          background: "#fff",
          width: "300px",
          height: "300px",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
        },
      }}
      shouldCloseOnEsc={true}
    >
      <section className="container">
        <section className="field">
          <label htmlFor="username">Username</label>
          <input name="username" onChange={e => setUserName(e.target.value)} />
        </section>
        <section className="field">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </section>

        <button className="loginButton" onClick={() => submit()}>
          {loading ? "Loading..." : "Login"}
        </button>
      </section>
    </Modal>
  )
}

export default Login
