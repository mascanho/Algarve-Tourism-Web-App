import React, { useEffect } from "react";
import Image from "next/image";

function WeatherModal({ weatherData }: any) {
  return (
    <div className="w-full m-auto py-10">
      <div className="flex-col items-center text-center w-full justify-center">
        <div className="flex-col">
          <span className="block text-3xl mb-4 text-gray-500">
            {weatherData.location.name}
          </span>
          <img
            src={weatherData.current.condition.icon}
            alt="weather"
            width={30}
            height={30}
            className="w-20 h-20 mx-auto"
          />
        </div>
      </div>
      <div className="text-center flex-col justify-center ">
        <span className="text-2xl block pb-4 text-gray-500">
          {weatherData.current.temp_c}°
        </span>
        <span className="text-gray-500 font-bold pt-8">
          {weatherData.current.condition.text}
        </span>
      </div>
      <div>
        <p className="text-center text-gray-500 font-bold pt-4">
          Humidity: {weatherData.current.humidity}%
        </p>
        <p className="text-center text-gray-500 font-bold pt-4">
          Wind: {weatherData.current.wind_kph} kph
        </p>
      </div>
    </div>
  );
}

export default WeatherModal;
