import React from "react";

function Title({ title, isCenter = false }) {
  return (
    <div
      className={`flex flex-col ${isCenter ? "items-center text-center" : ""}`}
    >
      <div className="w-16 h-1 bg-gradient-to-r from-purple-500 via-pink-600 to-orange-400 mb-2 rounded" />
      <h2 className="text-primary font-semibold text-4xl">{title}</h2>
    </div>
  );
}

export default Title;
