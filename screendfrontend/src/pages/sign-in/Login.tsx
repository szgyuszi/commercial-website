import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logUserIn } from "../../context-manager/features/userSlice";
import { useAppDispatch } from "../../context-manager/hooks";
import { loginUser } from "../../utils/fetch";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const emailOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      const login = async () => {
        const res = await loginUser({ email, password });
        if (res.error) {
          setError(true);
          setEmail("");
          setPassword("");
        } else {
          dispatch(logUserIn(res[0]));
          navigate("/");
        }
      };
      login();
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-white to-teal-400">
      <div className="flex flex-col justify-start items-center bg-teal-700 p-6 rounded-md drop-shadow-lg">
        <h1 className="text-6xl text-white mb-6 p-4">Sign in</h1>
        {error && (
          <p className="p-2 mb-2 bg-red-700 text-white text-xl rounded">
            Invalid email or password!
          </p>
        )}
        <form
          className="flex flex-col justify-start items-start"
          onSubmit={submitHandler}
        >
          <label className="text-3xl text-white mb-4" htmlFor="email">
            Email:
          </label>
          <input
            className="text-3xl px-3 py-2 rounded mb-4"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={emailOnChangeHandler}
            required
            placeholder="example@gmail.com"
          />
          <label className="text-3xl text-white mb-4" htmlFor="password">
            Password:
          </label>
          <input
            className="text-3xl px-3 py-2 rounded mb-4"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={passwordOnChangeHandler}
            required
            placeholder="*******"
          />

          <button
            className="w-full bg-white text-teal-900 text-3xl px-4 py-3 rounded mt-4 hover:bg-teal-900 hover:text-white  hover:drop-shadow-lg transition-all ease-in-out"
            type="submit"
          >
            Sign in!
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
