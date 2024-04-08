import React from "react";

const Forcast = ({title}) => {
  return (
    <div>
      <div className="flex items-center justify-between my-2">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>

          <img
            src="http://openweathermap.org/img/w/04n.png"
            className="w-12 my-1"
            alt="weather icon"
          />
          <p className="font-medium">22°C</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>

          <img
            src="http://openweathermap.org/img/w/04n.png"
            className="w-12 my-1"
            alt="weather icon"
          />
          <p className="font-medium">22°C</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>

          <img
            src="http://openweathermap.org/img/w/04n.png"
            className="w-12 my-1"
            alt="weather icon"
          />
          <p className="font-medium">22°C</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>

          <img
            src="http://openweathermap.org/img/w/04n.png"
            className="w-12 my-1"
            alt="weather icon"
          />
          <p className="font-medium">22°C</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>

          <img
            src="http://openweathermap.org/img/w/04n.png"
            className="w-12 my-1"
            alt="weather icon"
          />
          <p className="font-medium">22°C</p>
        </div>
      </div>
    </div>
  );
};

export default Forcast;
