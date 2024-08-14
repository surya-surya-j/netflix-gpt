import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-full aspect-video pt-[22%] px-24   absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="w-1/2 py-6 text-lg">{overview}</p>
      <div>
        <button className="bg-white  p-3 px-10 text-xl text-black  font-semibold rounded-lg hover:bg-opacity-80">
          ▷ play
        </button>
        <button className="mx-2 bg-gray-500  p-3 px-10 text-xl text-white bg-opacity-50 rounded-lg    ">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
