import "./App.css";

import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperaturAndDetails from "./components/TemperaturAndDetails";
import Forcast from "./components/Forcast";
function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-500 h-fit shadow-xl shadow-gray-400 rounded-xl ">
      <TopButton />
      <Inputs />

      <TimeAndLocation />
      <TemperaturAndDetails />
      <Forcast title={"Hourly Forecast"} />
      <Forcast title={"daily Forecast"} />
    </div>
  );
}

export default App;
