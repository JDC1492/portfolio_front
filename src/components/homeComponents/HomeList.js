import React from "react";

const Homelist = () => {
  return (
    <>
      <p className="homeList dev">
        Developer
        <div className="identifier hidden"></div>
      </p>
      <p className="homeList musc">
        Musician
        <div className="identifier hidden"></div>
      </p>
      <p className="homeList gamer">
        Gamer
        <div className="identifier hidden"></div>
      </p>
    </>
  );
};

export default Homelist;
