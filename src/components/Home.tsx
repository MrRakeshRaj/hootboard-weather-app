export default function MainPage() {
  return (
    <form className="w-full md:max-w-[340px] flex flex-col h-full lg:h-[240px] bg-white  backdrop-blur-lg drop-shadow-lg rounded">
      <div className="p-1 ml-4 mt-2">
        <h1 className="text-sky-400/100 text-lg font-bold">Weather App</h1>
      </div>
      <hr className="h-px my-2 mb-4 mr-0 ml-0 bg-gray-300 border-1"></hr>
      <div className="flex flex-col justify-center p-2 mx-2">
        <input
          type="text"
          className="px-2 py-1 text-center rounded-md border-2 dark:placeholder-gray-300 font-semibold"
          placeholder="Enter city name"
          required
        />
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
