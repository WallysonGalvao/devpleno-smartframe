import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import firebase from "../lib/firebase";
import Layout from "../components/Layout";
import HintMessage from "../components/HintMessage";
import Input from "../components/Input";

const CreateAccount = () => {
  const [error, setError] = useState({ message: "" });
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const register = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(() => navigate("/app"))
      .catch(({ code, message }) => setError({ code, message }));
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const { email, password, passwordConfirm } = form;

  return (
    <Layout>
      <div className="container max-w-full mx-auto md:py-24 px-6">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="md:mt-6">
                <div className="text-center font-semibold text-black">
                  Create your account
                </div>
                <div className="text-center font-base text-black">
                  You can start using SmartFrame for free.
                </div>
                <form className="mt-8">
                  <div className="mx-auto max-w-lg">
                    <Input
                      field="Email"
                      name="email"
                      onChange={onChange}
                      value={email}
                      type="email"
                    />

                    <Input
                      field="Password"
                      name="password"
                      onChange={onChange}
                      value={password}
                      type="password"
                    />

                    <Input
                      field="Password Confirm"
                      name="passwordConfirm"
                      onChange={onChange}
                      value={passwordConfirm}
                      type="password"
                    />

                    <div className="flex justify-start mt-3 ml-4 p-1">
                      <ul>
                        <HintMessage
                          isValid={
                            password === passwordConfirm && password.length > 0
                          }
                          successMessage="Passwords match"
                          errorMessage="Passwords do not match"
                        />
                        <HintMessage
                          isValid={password.length > 7}
                          successMessage="The minimum length is reached"
                          errorMessage="At least 8 characters required"
                        />

                        {error.message && (
                          <HintMessage errorMessage={error.message} />
                        )}
                      </ul>
                    </div>
                    <div className="flex justify-start">
                      <label className="block text-gray-500 font-bold my-4 flex items-center">
                        <input
                          className="leading-loose text-pink-600 top-0"
                          type="checkbox"
                        />
                        <span className="ml-2 text-sm py-2 text-gray-600 text-left">
                          Accept the{" "}
                          <a
                            href="/"
                            className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500"
                          >
                            Terms and Conditions of the site{" "}
                          </a>
                          and
                          <a
                            href="/"
                            className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500"
                          >
                            the information data policy.
                          </a>
                        </span>
                      </label>
                    </div>
                    <button
                      type="submit"
                      onClick={register}
                      className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                    >
                      Register
                    </button>
                  </div>
                </form>

                <div className="text-sm font-semibold block py-6 flex justify-center">
                  <Link
                    to="/sign-in"
                    className="text-black font-normal border-b-2 border-gray-200 hover:border-teal-500"
                  >
                    You're already member?{" "}
                    <span className="text-black font-semibold">Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateAccount;
