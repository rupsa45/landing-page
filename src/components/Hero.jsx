import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
        alt=""
        srcset=""
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md-left-[10%] max-w-[1100px] m-auto absolute p-4">
            <p>All Inclusive</p>
            <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Private Beaches and Gateways</h1>
            <p className="mx-w-[600px] drop-shadow-2xl py-2 text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
            inventore dolorem suscipit illo blanditiis at ad possimus aspernatur
            laboriosam, numquam minus eaque aut vero molestias recusandae ea.
            Molestiae, ipsum! Impedit!
            </p>
            <button className="bg-white text-black">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
