import React, { cloneElement, Children } from "react";

const Familia = (props) => {
  const { children } = props;
  return (
    <div>
      {Children.map(children, (child, key) => {
        return cloneElement(child, { ...props, key });
      })}
    </div>
  );
};

export default Familia;
