"use client";
import Image from "next/image";
import CustomSwitch from "@/components/switch/index";
import CustomPopover from "@/components/popup";
import AntSwitch from "@/components/ant-switch";
import LineChart from "@/components/line-chart";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchChartData } from "@/app/store/detailsSlice/details";
import { CircularProgress } from "@mui/material";

type TableRow = {
  title: string;
  id: string;
  data1: number | null;
  data2: number | null;
  data3: number | null;
  data4: number | null;
  data5: number | null;
  data6: number | null;
  data7: number | null;
  data8: number | null;
  data9: number | null;
};

export default function DetailsPageModule() {
  const dispatch = useAppDispatch();
  const { loading, chartData, tableData } = useAppSelector(
    (state) => state.detailsData
  );

  const handleFetchData = (id: number) => {
    dispatch(fetchChartData(id));
  };

  useEffect(() => {
    handleFetchData(0);
  }, []);

  return (
    <div className="">
      <div className="sticky top-[50px] z-[5]">
        <div className="hidden w-full mb-2 bg-dashboardBlue md:flex items-center  px-10 py-2">
          <div className="flex gap-2 items-center pr-14">
            <Image
              alt="caution"
              src={"/icons/caution.png"}
              height={20}
              width={20}
            />
            <span className="text-lg text-sideTabGray font-bold">
              Sample Stack
            </span>
          </div>
          <div className="h-[30px] w-[2px] bg-smallTextGray" />
          <div className="px-10 inline text-sideTabGray">
            <span className="text-base font-bold">Stack Id: </span>
            <span className="font-bold">099837465721</span>
          </div>
          <div className="hidden  py-2 rounded-xl md:flex justify-between gap-16 bg-topbarlightblue lg:w-[350px] px-4">
            <div className="flex flex-col">
              <span className="text-topbarLightGray">Forecast</span>
              <span className="font-bold text-lg text-greywhite">80%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-topbarLightGray">Forecast</span>
              <span className="font-bold text-lg text-greywhite">80%</span>
            </div>
          </div>
          <Image
            src={"/icons/flag.png"}
            height={30}
            width={30}
            alt="flag"
            className="ml-10"
          />
        </div>
        <div className="w-full px-10 py-2 bg-dashboardBlue">
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <Image
                src={"/icons/file-icon.png"}
                height={20}
                width={20}
                alt=""
              />
              <span className="text-base text-sideTabGray font-bold uppercase ">
                special requirements
              </span>
            </div>
            <div className="flex gap-1 items-center">
              <CustomSwitch />
              <span className="uppercase text-sideTabGray text-base font-bold">
                include
              </span>
            </div>
            <div className="h-[30px] w-[2px] bg-smallTextGray" />
            <CustomPopover
              actionElement={
                <Image
                  src={"/icons/down-arrow.png"}
                  alt="down"
                  width={25}
                  height={25}
                />
              }
            >
              <div className="bg-white rounded-lg p-2 h-[50px] w-[100px]"></div>
            </CustomPopover>
          </div>
        </div>
      </div>
      {/* sticky topbar ends here */}
      {loading ? (
        <div className="w-full h-[400px] flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="flex px-10 py-4 gap-10 items-center">
            <span className="text-base text-sideTabGray">Forcast Horizon</span>
            <div>
              <CustomPopover
                actionElement={
                  <div className="flex gap-2">
                    <span className="uppercase text-sm text-sideTabGray font-bold">
                      Latest issue
                    </span>
                    <Image
                      src={"/icons/down-arrow.png"}
                      alt="down"
                      width={25}
                      height={25}
                    />
                  </div>
                }
              >
                <div className="bg-white rounded-lg p-2 h-[50px] w-[100px]"></div>
              </CustomPopover>
            </div>
            <Image
              src={"/icons/info-icon.png"}
              alt=""
              width={30}
              height={30}
              className=""
            />
            <AntSwitch
              element={
                <span className="uppercase text-sm font-bold text-sideTabGray">
                  show confidence interval
                </span>
              }
            ></AntSwitch>
          </div>
          <div className="px-10 py-4 flex gap-10">
            <AntSwitch
              element={
                <div className="flex items-center gap-1">
                  <div className="h-[10px] rounded-md w-1 bg-green-400" />
                  <span className="uppercase text-sm font-bold text-sideTabGray">
                    AI forecast
                  </span>
                </div>
              }
            />
            <AntSwitch
              element={
                <div className="flex items-center gap-1">
                  <div className="h-[10px] rounded-md w-1 bg-yellow-300" />
                  <span className="uppercase text-sm font-bold text-sideTabGray">
                    final forecast
                  </span>
                </div>
              }
            />
          </div>
          <div className="w-full h-[300px] md:h-[500px] xl:[500px] 2xl:h-[600px] px-4 relative mb-4">
            <LineChart data={chartData} />
          </div>
          <div className="w-full px-10">
            <table className="w-full text-sideTabGray capitalize text-sm font-semibold">
              <thead className="bg-topbarLightGray bg-opacity-20">
                <tr className="w-full">
                  <td className="w-1/3">Data</td>
                  <td>Col2</td>
                  <td>Col3</td>
                  <td>Col4</td>
                  <td>Col5</td>
                  <td>Col6</td>
                  <td>Col7</td>
                  <td>Col8</td>
                  <td>Col9</td>
                  <td>Col10</td>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row: TableRow, idx) => (
                  <>
                    <tr
                      key={row.id}
                      className={`h-[50px] ${
                        idx < tableData.length &&
                        "border-b-[1px] border-seperator"
                      }`}
                    >
                      {Object.keys(row)
                        .filter((rowf) => rowf !== "id")
                        .map((col) => (
                          <td key={col}>{row[col as keyof TableRow]}</td>
                        ))}
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
