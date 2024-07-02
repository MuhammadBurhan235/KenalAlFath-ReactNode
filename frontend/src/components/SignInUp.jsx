import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignInUp = () => {
  const [emailUp, setEmailUp] = useState("");
  const [passwordUp, setPasswordUp] = useState("");
  const [emailIn, setEmailIn] = useState("");
  const [passwordIn, setPasswordIn] = useState("");
  const [formType, setFormType] = useState("signup");
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const email = emailUp;
      const password = passwordUp;
      await axios.post("http://localhost:5000/signup", { email, password });
      navigate("/signinuppage");
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const email = emailIn;
      const password = passwordIn;
      await axios.post("http://localhost:5000/signin", {
        email,
        password,
      });
      navigate("/detailidentitypage");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormToggle = () => {
    setFormType(formType === "signup" ? "signin" : "signup");
  };

  return (
    <div
      className="columns mt-5 is-centered"
      style={{
        backgroundImage: `url('1127738_720.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Set tinggi menjadi 100% tinggi viewport
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="card">
        <header className="card-header">
          <p className="card-header-title is-centered">
            {formType === "signup" ? "SIGN UP" : "SIGN IN"}
          </p>
        </header>
        <div className="card-content">
          <form
            onSubmit={formType === "signup" ? signUp : signIn}
            className="columns"
          >
            <div className="column">
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={formType === "signup" ? emailUp : emailIn}
                    onChange={(e) =>
                      formType === "signup"
                        ? setEmailUp(e.target.value)
                        : setEmailIn(e.target.value)
                    }
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={formType === "signup" ? passwordUp : passwordIn}
                    onChange={(e) =>
                      formType === "signup"
                        ? setPasswordUp(e.target.value)
                        : setPasswordIn(e.target.value)
                    }
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="card-footer-item">
            <button
              type="submit"
              className="button is-success"
              onClick={formType === "signup" ? signUp : signIn}
            >
              {formType === "signup" ? "Sign Up" : "Sign In"}
            </button>
          </div>
          <div className="card-footer-item">
            <button className="button" onClick={handleFormToggle}>
              {formType === "signup"
                ? "Switch to Sign In"
                : "Switch to Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInUp;
