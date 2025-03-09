"use client";
import Button from "@/components/buttons";
import Widget from "@/components/widgets";
import WorldMap from "@/components/world-map/index";
import MaxWidthWrapper from "@/components/wrappers";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchWidgetData } from "./store/widgets";
import { useEffect } from "react";
import { Skeleton } from "@mui/material";

const Home = () => {
  const { loading, data } = useAppSelector((state) => state.widgetData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchWidgetData());
  }, []);
  return (
    <>
      <section>
        <div className="w-screen h-screen overflow-hidden fixed z-[-1]">
          <WorldMap />
        </div>
      </section>
      <MaxWidthWrapper>
        <section className="">
          <div className="flex flex-col md:flex-row gap-4 mb-10 md:items-end">
            <span className="text-white text-3xl font-bold">Hello user,</span>
            <Button customStyles="bg-primary">There are 2 action items</Button>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full overflow-x-auto no-scrollbar flex gap-5">
              {loading ? (
                <>
                  <Skeleton
                    sx={{ flex: "none" }}
                    variant="rectangular"
                    width={200}
                    height={200}
                  />
                  <Skeleton
                    sx={{ flex: "none" }}
                    variant="rectangular"
                    width={200}
                    height={200}
                  />
                  <Skeleton
                    sx={{ flex: "none" }}
                    variant="rectangular"
                    width={200}
                    height={200}
                  />
                  <Skeleton
                    sx={{ flex: "none" }}
                    variant="rectangular"
                    width={200}
                    height={200}
                  />
                  <Skeleton
                    sx={{ flex: "none" }}
                    variant="rectangular"
                    width={200}
                    height={200}
                  />
                  <Skeleton
                    sx={{ flex: "none" }}
                    variant="rectangular"
                    width={200}
                    height={200}
                  />
                  <Skeleton
                    sx={{ flex: "none" }}
                    variant="rectangular"
                    width={200}
                    height={200}
                  />
                </>
              ) : (
                <>
                  {data.map((ele) => (
                    <Widget
                      key={ele.id}
                      forecastCount={ele.forecastCount}
                      foreCastPercentage={ele.foreCastPercentage}
                      cityName={ele.cityName}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default Home;
