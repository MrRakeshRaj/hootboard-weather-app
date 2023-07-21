import { ChangeEvent, useEffect, useState } from "react";
import { locationDetailsType, forecastType } from "../types";
// import { useNavigate } from "react-router-dom";

const useForecast = () => {
  const [location, setLocation] = useState<string>("");
  const [locationDetails, setLocationDetails] = useState<[]>([]);
  const [city, setCity] = useState<locationDetailsType | null>(null);
  const [forecast, setForecast] = useState<forecastType | null>(null);
  // const navigate = useNavigate();

  const getLocationDetails = async (value: string) => {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setLocationDetails(data);
    console.log(data);
  };

  const onSubmit = async () => {
    if (!city) return;
    await getForecast(city);

    // navigate("/forecast");
  };

  const getForecast = async (loc: locationDetailsType) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${loc.lat}&lon=${
        loc.lon
      }&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const forecastData = { ...data?.city, list: data?.list?.slice(0, 17) };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setForecast(forecastData);
    // console.log(data);
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

  return {
    location,
    locationDetails,
    forecast,
    onInputChange,
    handleLocationSelect,
    onSubmit,
  };
};

export default useForecast;
