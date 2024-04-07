import React from "react";

const TopButton = () => {
  const cities = [
    {
      id: 1,
      title: "New York",
    },
    {
      id: 2,
      title: "Los Angeles",
    },
    {
      id: 3,
      title: "Chicago",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Mumbai",
    },
  ];
  return (
    <div className="flex-items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="bg-transparent hover:bg-blue-600 text-white font-medium px-4 rounded "
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
