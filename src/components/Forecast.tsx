import { forecastType } from "../types";
import { titleCase } from "../helpers/titleCase";
type propsType = {
  data: forecastType;
};

export default function Forecast({ data }: propsType): JSX.Element {
  const today = data.list[0];
  const weather = today.weather;
  return (
    <section className="w-full md:max-w-[300px] flex flex-col h-full lg:h-[400px] bg-white  backdrop-blur-lg drop-shadow-lg rounded">
      <div className="p-1 ml-2 mt-2">
        <div className="flex flex-row">
          <button className="text-sky-400/100 text-lg font-bold">
            <svg
              className="h-8 w-8 text-sky-400/100 mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="9" y2="16" />
              <line x1="5" y1="12" x2="9" y2="8" />
            </svg>
          </button>
          <h1 className="text-sky-400/100 text-lg font-bold">Weather App</h1>
        </div>
      </div>
      <hr className="h-px mb-4 mr-0 ml-0 bg-gray-300 border-1"></hr>
      <div className="flex flex-col justify-center p-2 mx-2">
        <section>
          <div className="text-l font-sans inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 mt-1 pr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span>
              {data.name}, {data.country}
            </span>
          </div>
          <div>
            <span>
              {Math.round(today.main.temp)}
              <sup>o</sup>
            </span>
            <span> C</span>
          </div>
          <div>
            <span>{titleCase(today.weather[0].description)}</span>
          </div>
          <div>
            <div>
              Feels like:{" "}
              <span>
                {Math.round(today.main.feels_like)}
                <sup>o</sup>
              </span>
              <span> C</span>
            </div>
            <div>
              Humidity: {today.main.humidity} <span>%</span>
            </div>
          </div>
        </section>
      </div>
      <hr className="h-px my-2 mb-4 mr-0 ml-0 bg-gray-300 border-1"></hr>
    </section>
  );
}
