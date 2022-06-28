export default function Reviewcard({ stars, title, Review, Name }) {
  return (
    <div className="w-full max-w-sm mx-10 px-6 py-5  mx-auto bg-black  bg-opacity-10 rounded-xl shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-white opacity-50 dark:text-gray-400">
          Our reviews
        </span>
        <div className="  text-xs font-bold text-black uppercase  rounded-full dark:bg-blue-300 dark:text-blue-900">
          <div className="  text-xl font-semibold rounded-xl bg-gray-900  leading-none flex items-center p-2 justify-center">
            {[...Array(stars)].map((e, i) => (
              <span className="text-yellow-300  " key={i}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-bold text-white dark:text-white">
          {title}
        </h1>
        <p className="mt-2 text-sm text-white dark:text-gray-300">{Review}</p>
      </div>

      <div>
        <div className="flex items-center mt-2 " />
        <span className="text-white font-bold">{Name}</span>
      </div>
    </div>
  );
}
