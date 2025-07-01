import React, { useState } from "react";
import Header from "../components/Header/Header";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleProceed = (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    // Proceed with login logic (e.g., OTP, API call, etc.)
    alert(`Proceeding with: +91 ${mobile}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header />
      <div
        className="flex items-center justify-center px-4"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <form
          onSubmit={handleProceed}
          className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-sm border border-orange-100"
        >
          <div className="flex flex-col items-center mb-6">
            <img
              src="/logos/login.png"
              alt="Login"
              className="w-16 h-16 mb-2"
            />
            <h2 className="text-3xl font-extrabold mb-1 text-orange-600">
              Sign In
            </h2>
            <p className="text-gray-500 text-sm">
              Welcome to MySathi! Please login to continue.
            </p>
          </div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="mobile"
          >
            Mobile Number
          </label>
          <div className="flex items-center mb-2">
            <span
              className="rounded-l-xl border-2 border-gray-200 bg-gray-50 px-2 py-2 text-sm text-gray-700 select-none flex items-center gap-1"
              style={{ minWidth: 70 }}
            >
              <img
                src="/logos/flag.svg"
                alt="IN"
                className="w-6 h-4 mr-1 inline-block"
              />
              +91
            </span>
            <input
              id="mobile"
              type="tel"
              maxLength={10}
              pattern="[0-9]{10}"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ""))}
              className="w-full px-4 py-3 border-2 border-l-0 border-gray-200 rounded-r-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-base"
              placeholder="10-digit mobile number"
              required
              autoFocus
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm mb-2 text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl mt-4 text-lg"
          >
            Proceed
          </button>
          <div className="mt-6 text-center text-gray-400 text-xs">
            By continuing, you agree to our{" "}
            <a href="#" className="text-orange-500 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-orange-500 underline">
              Privacy Policy
            </a>
            .
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
