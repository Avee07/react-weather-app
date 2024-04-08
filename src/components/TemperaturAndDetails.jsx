import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
const TemperaturAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3 ">
        <img
          src="http://openweathermap.org/img/w/04n.png"
          alt="weather icon"
          className="w-20"
        />
        <p className="text-4xl">24°C</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            <p>Feels like:</p>
            <span className="font-medium ml-1">25°C</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            <p>humidity</p>
            <span className="font-medium ml-1">70%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            <p>Wind :</p>
            <span className="font-medium ml-1">13 km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center space-x-1 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">07:30 PM</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          High: <span className="font-medium ml-1">29°C</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          Low: <span className="font-medium ml-1">22°C</span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
};

export default TemperaturAndDetails;
