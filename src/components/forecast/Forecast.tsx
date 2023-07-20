import { forecastType } from "../../types";
import { titleCase } from "../../helpers/titleCase";
import { getComponentName } from "../../helpers/getComponentName";
import { lazy, Suspense, useCallback } from "react";
import Loading from "../Loading";
import "./forecast.css";
import BackArrowButton from "../Icons/BackArrowButton";
import MapPin from "../Icons/MapPin";

type propsType = {
  data: forecastType;
};

export default function Forecast({ data }: propsType): JSX.Element {
  const today = data.list[0];
  const { icon } = today.weather[0];
  let componentName = useCallback(getComponentName(icon), [icon]);
  let Icon = lazy(() => import(`../Icons/${componentName}`));

  return (
    <section className="w-full md:max-w-[342px] flex flex-col h-full lg:h-[450px] bg-white  backdrop-blur-lg drop-shadow-lg rounded">
      <div className="p-1 ml-2 mt-2">
        <div className="flex flex-row">
          <BackArrowButton />
          <h1 className="text-sky-400/100 text-lg font-bold">Weather App</h1>
        </div>
      </div>

      <hr className="h-px mr-0 ml-0 bg-gray-300 border-1"></hr>
      {/* weather icon and temperature */}
      <div className="flex relative flex-col justify-center p-2 mx-2">
        <div className="mt-0">
          <Suspense fallback={<Loading />}>{Icon && <Icon />}</Suspense>
        </div>
        <div className="absolute text-6xl mt-24 font-poppins w-full text-center">
          <span className="font-black">
            {Math.round(today.main.temp)}
            <sup
              className="font-extrabold text-xl"
              style={{
                verticalAlign: "top",
                position: "relative",
                top: "-0.125em",
                right: "-0.35em",
              }}
            >
              o
            </sup>
          </span>
          <span className="font-bold ml-1 p-2">C</span>
        </div>
        {/* description and city */}
        <div className="font-poppins font-bold text-lg">
          <div className="w-full text-center pb-2 mt-0">
            <span>{titleCase(today.weather[0].description)}</span>
          </div>
          <div className="w-full text-center">
            <div className="inline-flex text-center m-auto">
              <MapPin />
              <span className="text-base text-center">
                {data.name}, {data.country}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* last section of card */}
      <div className="flex flex-row w-full h-full mt-2">
        <div className="border-gray-200 border w-full">
          <div className="flex flex-row">
            <div>icon</div>
            <div>
              <div>
                {Math.round(today.main.feels_like)}
                <sup>o</sup>
                <span>C</span>
              </div>
              <div>Feels like </div>
            </div>
          </div>
        </div>
        <div className="border-gray-200 border w-full ">
          <div className="flex flex-row">
            <div>icon</div>
            <div>
              <div>
                {today.main.humidity}
                <span>%</span>
              </div>
              <div>Humidity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
