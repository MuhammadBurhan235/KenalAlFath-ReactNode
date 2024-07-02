import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SignInUpAlFath = () => {
  const [emailUp, setEmailUp] = useState("");
  const [passwordUp, setPasswordUp] = useState("");
  const [emailIn, setEmailIn] = useState("");
  const [passwordIn, setPasswordIn] = useState("");
  const [formType, setFormType] = useState("signup");
  const navigate = useNavigate();

  const settings1 = {
    dots: false,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: 100,
    arrows: false,
  };

  const settings2 = {
    dots: false,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: 100,
    arrows: false,
  };

  const settings3 = {
    dots: false,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: 100,
    arrows: false,
  };

  const settings4 = {
    dots: false,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: 100,
    arrows: false,
  };

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
    <div>
      <div
        className="section"
        style={{
          position: "absolute",
          width: "44%",
          transform: "rotate(90deg)",
          marginLeft: 35,
          marginTop: 160,
        }}
      >
        <Slider {...settings1}>
          <div>
            <img src="/f1.png" alt="" style={{ height: 632, width: 370 }} />
          </div>
          <div>
            <img src="/f2.png" alt="" style={{ height: 632, width: 370 }} />
          </div>
          <div>
            <img src="/f3.png" alt="" style={{ height: 632, width: 370 }} />
          </div>
          <div>
            <img src="/f4.png" alt="" style={{ height: 632, width: 370 }} />
          </div>
          <div>
            <img src="/f5.png" alt="" style={{ height: 632, width: 370 }} />
          </div>
        </Slider>
      </div>
      <div
        className="section"
        style={{
          position: "absolute",
          width: "30%",
          transform: "rotate(-90deg)",
          marginLeft: 761,
          marginTop: -225,
        }}
      >
        <Slider {...settings2}>
          <div>
            <img
              src="/p1.png"
              alt=""
              style={{ height: 632, maxWidth: 10000 }}
            />
          </div>
          <div>
            <img
              src="/p2.png"
              alt=""
              style={{ height: 632, maxWidth: 10000 }}
            />
          </div>
          <div>
            <img
              src="/p3.png"
              alt=""
              style={{ height: 632, maxWidth: 10000 }}
            />
          </div>
          <div>
            <img
              src="/p4.png"
              alt=""
              style={{ height: 632, maxWidth: 10000 }}
            />
          </div>
          <div>
            <img
              src="/p5.png"
              alt=""
              style={{ height: 632, maxWidth: 10000 }}
            />
          </div>
        </Slider>
      </div>
      <div
        className="section"
        style={{
          backgroundColor: "black",
          opacity: "50%",
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
      ></div>
      <div
        className="section"
        style={{
          background: "linear-gradient(to right, #6E0202 40%, #641C65 60%)",
          opacity: "70%",
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
      ></div>
      <div
        className="circle"
        style={{
          backgroundColor: "#6E0202",
          opacity: "70%",
          height: 150,
          width: 150,
          borderRadius: "50%",
          position: "absolute",
          marginLeft: 85,
          marginTop: 75,
        }}
      ></div>
      <div
        className="circle"
        style={{
          backgroundColor: "#641C65",
          opacity: "70%",
          height: 150,
          width: 150,
          borderRadius: "50%",
          position: "absolute",
          marginLeft: 1025,
          marginTop: 370,
        }}
      ></div>

      <div
        className="card"
        style={{
          position: "absolute",
          marginLeft: 332,
          marginTop: 150,
          borderColor: "grey",
          backgroundColor: "#F3DEB1",
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          width: 300,
          height: 290,
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <header className="card-header">
          <p
            className="card-header-title is-centered"
            style={{
              border: "none",
              fontSize: 30,
              background: "linear-gradient(to right, #6E0202 40%, #641C65 60%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginLeft: -35,
            }}
          >
            AL-FATH GO...
          </p>
        </header>
        <div className="card-content" style={{ border: "none" }}>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: 12,
              margin: 10,
            }}
          >
            Software Management System milik LDK AL-FATH yang beguna mendata,
            memonitoring, dan mengevaluasi program kerja Lembaga Al-Fath Pusat
            dan Fakultas
          </p>
        </div>
        <div className="card-footer">
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: 12,
              margin: 10,
            }}
          >
            Our Social Media:
          </p>
        </div>
      </div>
      <div
        className="card"
        style={{
          position: "absolute",
          marginLeft: 632,
          marginTop: 150,
          borderColor: "grey",
          backgroundColor: "#F3DEB1",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          height: 290,
          width: 300,
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
          borderLeft: "solid 1px white",
        }}
      >
        <header
          className="card-header"
          style={{ border: "none", boxShadow: "none" }}
        >
          <p
            className="card-header-title is-centered"
            style={{ border: "none", fontSize: 20 }}
          >
            Assalamu'alaikum
          </p>
        </header>
        <div className="card-content" style={{ border: "none" }}>
          <form
            onSubmit={formType === "signup" ? signUp : signIn}
            className="columns"
          >
            <div className="column">
              <div className="field">
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
                    placeholder="Username"
                    style={{
                      borderColor: "grey",
                      backgroundColor: "#F3DEB1",
                      fontFamily: "sans-serif",
                      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </div>
              </div>
              <div className="field">
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
                    style={{
                      borderColor: "grey",
                      backgroundColor: "#F3DEB1",
                      fontFamily: "sans-serif",
                      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: 12,
                      margin: 4,
                    }}
                  >
                    Lupa Password? Silahkan hubungi Sekretaris Pusat/Fakultas
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div
          className="card-footer"
          style={{ border: "none", display: "flex", flexDirection: "column" }}
        >
          <div className="card-footer-item" style={{ border: "none" }}>
            <button
              type="submit"
              className="button"
              onClick={formType === "signin" ? signUp : signIn}
              style={{
                background: "linear-gradient(to right, #6E0202, #641C65)",
                border: "none",
                color: "white",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
                marginTop: -15,
              }}
            >
              {formType === "signin" ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInUpAlFath;
