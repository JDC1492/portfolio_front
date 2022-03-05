import React from "react";

const Homelist = () => {
  return (
    <>
      <p className="homeList dev">Developer</p>
      <div className="desc__dev hidden"></div>
      <p className="homeList musc">Musician</p>
      <div className="desc__musc hidden"></div>
      <p className="homeList gamer">Gamer</p>
      <div className="desc__gamer hidden"></div>
    </>
  );
};

export default Homelist;
