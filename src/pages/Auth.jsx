import { useEffect, useState } from "react";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import restaurant from "../assets/images/swift-serve-restaurant.jpg";
import logo from "../assets/images/swift-serve.svg";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* LEFT SECTION */}
      <div
        className="w-1/2 relative flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${restaurant})` }}
      >

        {/* BG Image */}
        <img
          src={restaurant}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="Restaurant Image"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/20" />

        {/* Bottom Quote */}
        <blockquote className="absolute bottom-10 px-10 mb-10 text-2xl italic text-white z-10 max-w-lg">
          Serve great food with care, speed, and warmth
          <span className="block mt-4 text-[#c96a26]">
            — Founder of SwiftServe —
          </span>
        </blockquote>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-1/2 min-h-scren bg-gray-200 p-10">
        <div className="flex flex-col items-center gap-2">
          <img
            src={logo}
            alt="SwiftServe Logo"
            className="h-14 w-14 border-2 rounded-full p-1"
          />
        </div>

        <h2 className="text-4xl text-center mt-10 font-semibold text-[#9D5623] mb-10">
          {isRegister ? "Employee Registration" : "Employee Login"}
        </h2>

        {/* Components */}
        {isRegister ? <Register /> : <Login />}

        <div className="flex justify-center mt-6">
          <p className="text-sm text-[#9D5623]">
            {isRegister ? "Already have an account? " : "Don't have an account? "}
            <a
              onClick={() => setIsRegister(!isRegister)}
              className="text-[#9D5623] font-semibold hover:underline"
              href="#"
            >
              {isRegister ? "Sign in" : "Sign up"}
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Auth