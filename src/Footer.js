import React from "react";

const footer = () => {
  const today = new Date();
  return (
    <footer>
      <h1>copyright &copy; {today.getFullYear()}</h1>
    </footer>
  );
};

export default footer;
