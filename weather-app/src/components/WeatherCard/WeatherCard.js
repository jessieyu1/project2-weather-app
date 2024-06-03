import React, { useEffect } from 'react';
import getCurrent from '../../apis/getCurrent'
import CurrentCity from "./components/CurrentCity";
import Forecast from "./components/Forecast";
import SearchBar from "./components/SearchBar";
import OtherCities from "./components/OtherCities";

const WeatherCard = () => {
  useEffect(() => {
    getCurrent()
    .then ((data) => {
      console.log(data)
    })
  }, [])
  return (<div className= "md:w-fit h-full mx-auto rounded-3xl bg-white bg-opacity-90 shadow-2xl shadow-back/50  grid grid-cols-6 grid-rows-6 grid-flow-col overflow-hidden">
  <div
    className="row-span-6 col-span-2 relative m-6  shadow-md rounded-3xl"
    style={{
      backgroundImage:
        "linear-gradient(152deg, #899bf0 1%, #3f55e4 54%, #3f55e4 96%)",
    }}
  >
    <CurrentCity   />
  </div>
  <div className="row-span-3 col-span-4 mr-6 mt-8">
    <Forecast  />
  </div>
  <div className="col-span-4 m-6">
    <SearchBar
    
     />
  </div>
  <div className="row-span-2 col-span-4 m-6 ">
    <OtherCities />
  </div>
</div>
);
}

export default WeatherCard;
