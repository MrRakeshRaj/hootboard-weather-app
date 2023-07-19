import Search from "./Search";
import GetDeviceLocation from "./GetDeviceLocation";
import useForecast from "../hooks/useForecast";

export default function Home(): JSX.Element {
  const {
    location,
    locationDetails,
    forecast,
    onInputChange,
    handleLocationSelect,
    onSubmit,
  } = useForecast();
  return (
    <>
      {forecast ? (
        forecast.sunrise
      ) : (
        <section className="w-full md:max-w-[340px] flex flex-col h-full lg:h-[240px] bg-white  backdrop-blur-lg drop-shadow-lg rounded">
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
        </section>
      )}
    </>
  );
}
