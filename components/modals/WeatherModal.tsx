import React from "react";
import Image from "next/image";

function WeatherModal({ weatherData }: any) {
  return (
    <div className="w-full m-auto py-10">
      <div className="flex items-center text-center w-full justify-center">
        <span className="text-2xl">{weatherData.current.temp_c}°</span>
        <img
          src={weatherData.current.condition.icon}
          alt="weather"
          width={30}
          height={30}
          className="w-16 h-16"
        />
      </div>
      <div className="text-center flex justify-center">
        <span className="text-gray-500 font-bold">
          {weatherData.current.condition.text}
        </span>
      </div>
    </div>
  );
}

export default WeatherModal;
