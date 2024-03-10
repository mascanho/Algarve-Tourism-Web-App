import React from "react";

function layout({ children }: any) {
  return (
    <div className="min-h-screen mx-auto  w-full max-w-7xl">{children}</div>
  );
}

export default layout;
