import React from "react";

function Comment() {
  return (
    <div>
      <div className="flex w-full">
        <img
          alt="Ichigo Kurosaki"
          src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/Ichigo-Kurosaki.jpg"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col items-center justify-center ml-2 w-full">
          <div className="flex items-center space-x-2  my-2 w-full">
            <span className="text-black font-semibold text-left">
              Ichigo Kurosaki
            </span>
            <div>
              <span className="text-xs text-gray-400 m-auto ">Apr 2020</span>
            </div>
          </div>
          <div className="block">
            <p className="text-base pl-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis cumque a placeat rem ipsum, nemo aspernatur quod et
              cupiditate nam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
