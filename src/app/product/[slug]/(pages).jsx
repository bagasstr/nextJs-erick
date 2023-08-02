import React from "react";

export const page = ({ params }) => {
  return (
    <div>
      <div>My Post: {params.slug}</div>
    </div>
  );
};
