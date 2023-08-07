import React from "react";

const Room = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-gradient-to-r from-sky-100 to-sky-200 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2 ">
        <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
        <p className="pt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, vero!
          Enim quia eos numquam error!
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="w-full object-cover h-full"
          src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
          alt=""
          srcset=""
        />
        <img
          className="w-full object-cover h-full row-span-2"
          src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
          alt=""
          srcset=""
        />
        <img
          className="w-full object-cover h-full"
          src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default Room;
