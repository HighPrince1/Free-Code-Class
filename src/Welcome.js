import React from "react";

function Welcome() {
  return (
    <>
      <div className="Welcome">
        <p>
          In our rapidly evolving world, the role of technology has become
          nothing short of transformative. As we navigate the digital age, we
          want to emphasize the profound importance of acquiring tech skills,
          particularly programming. Programming is the language of innovation,
          he gateway to limitless possibilities, and the driving force behind
          countless advancements in every sector of human endeavor.
        </p>
      </div>

      <div className="SlidingImages">
        <div className="ImageContainer">
          <img src="/Icon1.jpeg" alt="icon" className="SlidingImage" />
        </div>
        <div className="ImageContainer">
          <img src="/Icon2.jpeg" alt="icon" className="SlidingImage" />
        </div>
      </div>
    </>
  );
}

export default Welcome;
