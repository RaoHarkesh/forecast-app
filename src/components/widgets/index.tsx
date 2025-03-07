import Link from "next/link";

interface props {
  cityName: string;
  forecastCount: number;
  foreCastPercentage: number;
}
const Widget = ({ cityName, forecastCount, foreCastPercentage }: props) => {
  return (
    <Link href={"/details"}>
      <div
        style={{
          borderImageSource: "linear-gradient(to bottom, blue, #72CFFF)",
          borderImageSlice: 1,
        }}
        className="relative rounded-md h-[200px] w-[200px] flex-none border-[2px] backdrop-blur-[2px]"
      >
        <div className="w-full h-full px-2">
          <div className="h-1/3 w-full text-white text-base flex items-center">
            <span>{cityName}</span>
          </div>
          <div className="h-1/3 w-full flex justify-between items-center">
            <div className="flex flex-col text-white text-[12px] items-center">
              <span>Forecast</span>
              <span className="text-lg">{forecastCount}</span>
            </div>
          </div>
          <div className="h-1/3 w-full flex justify-between items-center">
            <div className="flex flex-col text-white text-[12px] items-center">
              <span>Forecast</span>
              <span className="text-lg">{foreCastPercentage}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Widget;
