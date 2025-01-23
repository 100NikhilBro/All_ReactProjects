import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const LogIn = ({ login, setLogIn }) => {
  const [formdata, setData] = useState({
    email: "",
    password: "",
  });

  function formHandler(event) {
    event.preventDefault();
  }

  const navi = useNavigate();

  function submitHandler() {
    setLogIn(true);
    navi("/dashboard");
  }

  function changeHandler(event) {
    const { name, value } = event.target;

    setData((prevdata) => {
      return {
        ...prevdata,
        [name]: value,
      };
    });
  }

  return (
    <div className="">
      <Outlet></Outlet>

      <div>
        <h1>Welcome Back !!!</h1>
        <p>
          Build skills for today, tomorrow, beyond.
          <span></span>
          Education to future-proof your career.
        </p>
      </div>

      <form onSubmit={formHandler}>
        <label htmlFor="email">Email Address</label>
        <input
          onChange={changeHandler}
          value={formdata.email}
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
        />

        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={changeHandler}
            value={formdata.password}
            type="password"
            name="password"
            id="password"
          />
        </div>

        <button onClick={submitHandler}>Submit</button>

        <div className="flex justify-center space-x-4">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="h-[30px] w-[30px]"
          />
          <button onClick={submitHandler}>Sign in with Google</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
