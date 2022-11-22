import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../utils/fetch";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && password && email && password === passwordConfirm) {
      const register = async () => {
        const res = await registerUser({ email, password, name });
        if (res.error) {
          setError(true);
          setEmail("");
          setPassword("");
          setName("");
          setPasswordConfirm("");
        } else {
          navigate("/");
        }
      };
      register();
    }
  };
  return (
    <main className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-white to-teal-400">
      <div className="flex flex-col justify-start items-center bg-teal-700 p-6 rounded-md drop-shadow-lg">
        <h1 className="text-6xl text-white mb-6 p-4">Register</h1>
        {error && (
          <p className="p-2 mb-2 bg-red-700 text-white text-xl rounded">
            Email already had been used!
          </p>
        )}
        <form
          className="flex flex-col justify-start items-start"
          onSubmit={handleSubmit}
        >
          <label className="text-3xl text-white mb-4" htmlFor="name">
            Name:
          </label>
          <input
            className="text-3xl px-3 py-2 rounded mb-4"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John"
          />
          <label className="text-3xl text-white mb-4" htmlFor="email">
            Email:
          </label>
          <input
            className="text-3xl px-3 py-2 rounded mb-4"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
          />
          <label className="text-3xl text-white mb-4" htmlFor="password">
            Password:
          </label>
          <input
            className="text-3xl px-3 py-2 rounded mb-4"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*****"
          />
          <label className="text-3xl text-white mb-4" htmlFor="passwordConfirm">
            Confirm password:
          </label>
          <input
            className="text-3xl px-3 py-2 rounded mb-4"
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="*****"
          />
          <button
            className="w-full bg-white text-teal-900 text-3xl px-4 py-3 rounded mt-4 hover:bg-teal-900 hover:text-white  hover:drop-shadow-lg transition-all ease-in-out"
            type="submit"
          >
            Register
          </button>
          <p
            className="hover:cursor-pointer select-none w-full mt-4 text-white text-lg text-center"
            onClick={() => navigate("/sign-in")}
          >
            Already have an account? Sign in!
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;
