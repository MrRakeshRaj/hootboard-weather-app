import { ChangeEvent, useEffect, useState } from "react";
import { locationDetailsType } from "../types";

export default function MainPage(): JSX.Element {
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
      }&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
    );
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
        <div className="relative w-full">
          <input
            type="text"
            onChange={onInputChange}
            value={location}
            className="block p-2.5 w-full z-20 text-center rounded-md border-2 dark:placeholder-gray-300 font-semibold"
            placeholder="Enter city name"
            required
          />
          <ul className="absolute z-10 top-12 w-full bg-white ml-1 rounded-b-md">
            {locationDetails.map((loc: locationDetailsType, index) => (
              <li key={`${loc.name}-${index}`}>
                <button
                  className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
                  onClick={() => handleLocationSelect(loc)}
                >
                  {loc.name}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="submit"
            onClick={onSubmit}
            className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-300">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button
          type="button"
          className="text-white bg-sky-400/100 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 font-medium rounded-md text-sm px-6 py-2.5 mb-2 dark:sky-400/100 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-600"
        >
          Get Device Location
        </button>
      </div>
    </form>
  );
}
