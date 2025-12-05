import React from "react";
import Navigation from "../components/shared/Navigation";
import Greetings from "../components/home/Greetings";

const Home = () => {
  return (
    <section className="h-[calc(100vh-4rem)] overflow-hidden flex gap-3">

      {/* LEFT DIV */}
      <div className="flex-3">
        <Greetings/>
      </div>
      {/* RIGHT DIV */}
      <div className="flex-2">
        
      </div>
      <Navigation />
    </section>
  );
};

export default Home;
