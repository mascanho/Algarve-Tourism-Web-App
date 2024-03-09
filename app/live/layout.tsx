import React from "react";

function layout({ children }: any) {
  return (
    <div className="min-h-screen mx-auto max-w-7xl w-full">{children}</div>
  );
}

export default layout;
