import { ChangeEvent, useEffect, useState } from "react";
import { locationDetailsType } from "../types";
import Search from "./Search";
import GetDeviceLocation from "./GetDeviceLocation";

export default function Home(): JSX.Element {
  const [location, setLocation] = useState<string>("");
  const [locationDetails, setLocationDetails] = useState<[]>([]);
  const [city, setCity] = useState<locationDetailsType | null>(null);

  const getLocationDetails = async (value: string) => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );
    const data = await response.json();
    setLocationDetails(data);
    console.log(data);
  };

  const onSubmit = async () => {
    if (!city) return;
    await getForecast(city);
  };

  const getForecast = async (loc: locationDetailsType) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${loc.lat}&lon=${
        loc.lon
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      }&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json();
    console.log(data);
  };

  const handleLocationSelect = (loc: locationDetailsType) => {
    setCity(loc);
  };

  useEffect(() => {
    if (city) {
      setLocation(city.name);
      setLocationDetails([]);
    }
  }, [city]);

  const onInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setLocation(e.target.value);
    if (value === "") return;
    await getLocationDetails(value);
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full md:max-w-[340px] flex flex-col h-full lg:h-[240px] bg-white  backdrop-blur-lg drop-shadow-lg rounded"
    >
      <div className="p-1 ml-4 mt-2">
        <h1 className="text-sky-400/100 text-lg font-bold">Weather App</h1>
      </div>
      <hr className="h-px my-2 mb-4 mr-0 ml-0 bg-gray-300 border-1"></hr>
      <div className="flex flex-col justify-center p-2 mx-2">
        <Search
          location={location}
          locationDetails={locationDetails}
          onInputChange={onInputChange}
          handleLocationSelect={handleLocationSelect}
          onSubmit={onSubmit}
        />
        <GetDeviceLocation />
      </div>
    </form>
  );
}
