import DetailsLayout from "@/components/details-layout";
import Image from "next/image";
import CustomSwitch from "@/components/switch/index";
import CustomPopover from "@/components/popup";
import AntSwitch from "@/components/ant-switch";
import LineChart from "@/components/line-chart";
import { v4 as uuidv4 } from "uuid";
import { useMemo } from "react";

const data = {
  labels: [
    "Q2 2022",
    "Q3 2022",
    "Q4 2022",
    "Q1 2023",
    "Q2 2023",
    "Q3 2023",
    "Q4 2023",
    "Q1 2024",
    "Q2 2024",
    "Q3 2024",
    "Q4 2024",
    "Q1 2025",
    "Q2 2025",
    "Q3 2025",
    "Q4 2025",
    "Q1 2026",
    "Q2 2026",
  ],
  datasets: [
    {
      label: "Sales",
      data: [500, 460, 600, 500, 560, 700, 660],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      borderWidth: 2,
      tension: 0,
    },
    {
      label: "Forecast",
      data: [650, 550, 580, 550, 460, 710, 700, 600],
      borderColor: "#facc15",
      backgroundColor: "rgba(250, 204, 21, 0.2)",
      borderWidth: 2,
      tension: 0,
    },
    {
      label: "Forecast",
      data: [null, null, null, null, 700, 670, 600, 700],
      borderColor: "#175320",
      backgroundColor: "rgba(250, 204, 21, 0.2)",
      borderWidth: 2,
      tension: 0,
    },
    {
      label: "Forecast",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        380,
        400,
        450,
        400,
        450,
        470,
        500,
        470,
      ],
      borderColor: "#514548",
      backgroundColor: "rgba(250, 204, 21, 0.2)",
      borderWidth: 2,
      tension: 0,
      borderDash: [5, 5],
    },
    {
      label: "Forecast",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        760,
        700,
        620,
        700,
        690,
        800,
        820,
        830,
      ],
      borderColor: "#175320",
      backgroundColor: "rgba(250, 204, 21, 0.2)",
      borderWidth: 2,
      tension: 0,
      borderDash: [5, 5],
    },
    {
      label: "Forecast",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        700,
        600,
        700,
        null,
        null,
        null,
        null,
      ],
      borderColor: "#facc15",
      backgroundColor: "rgba(250, 204, 21, 0.2)",
      borderWidth: 2,
      tension: 0,
      borderDash: [5, 5],
    },
  ],
};

const tableData = [
  {
    title: "Data 1",
    data1: 1500,
    data2: 900,
    data3: null,
    data4: 1200,
    data5: 1800,
    data6: 1400,
    data7: null,
    data8: 700,
    data9: 1600,
  },
  {
    title: "Data 2",
    data1: 800,
    data2: 1300,
    data3: 1100,
    data4: null,
    data5: 1400,
    data6: 1900,
    data7: null,
    data8: 900,
    data9: 1700,
  },
  {
    title: "Data 3",
    data1: 600,
    data2: null,
    data3: 1700,
    data4: 900,
    data5: 2000,
    data6: 1500,
    data7: 1000,
    data8: null,
    data9: 1800,
  },
  {
    title: "Data 4",
    data1: 1200,
    data2: 1800,
    data3: 1600,
    data4: null,
    data5: 1400,
    data6: 800,
    data7: null,
    data8: 1100,
    data9: 1300,
  },
  {
    title: "Data 5",
    data1: null,
    data2: 1100,
    data3: 1400,
    data4: 700,
    data5: 1800,
    data6: 900,
    data7: 2000,
    data8: null,
    data9: 1500,
  },
  {
    title: "Data 6",
    data1: 900,
    data2: 1400,
    data3: 2000,
    data4: 1700,
    data5: 1300,
    data6: null,
    data7: 800,
    data8: 1800,
    data9: null,
  },
  {
    title: "Data 7",
    data1: 1400,
    data2: null,
    data3: 1300,
    data4: 1100,
    data5: 1900,
    data6: 1200,
    data7: 1700,
    data8: 900,
    data9: null,
  },
  {
    title: "Data 8",
    data1: 1600,
    data2: 900,
    data3: 1200,
    data4: null,
    data5: 1500,
    data6: 1800,
    data7: 2000,
    data8: null,
    data9: 1400,
  },
];

export default function DetailsPageModule() {
  const tableDataIdLoad = useMemo(
    () =>
      tableData.map((obj) => {
        return { ...obj, id: uuidv4() };
      }),
    []
  );
  return (
    <DetailsLayout>
      <div className="">
        <div className="sticky top-[50px] z-[5]">
          <div className="w-full mb-2 bg-dashboardBlue flex items-center  px-10 py-2">
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
            <div className="py-2 rounded-xl flex justify-between gap-16 bg-topbarlightblue lg:w-[350px] px-4">
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
        <div className="w-full h-[400px] px-4">
          <LineChart data={data} />
        </div>
        <div className="w-full px-10">
          <table className="w-full text-sideTabGray capitalize text-sm font-semibold">
            <thead>
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
              {tableDataIdLoad.map((row: any, idx) => (
                <>
                  <tr
                    key={row.id}
                    className={`h-[50px] ${
                      idx < tableDataIdLoad.length &&
                      "border-b-[1px] border-seperator"
                    }`}
                  >
                    {Object.keys(row)
                      .filter((rowf) => rowf !== "id")
                      .map((col) => (
                        <td key={uuidv4()}>{row[col]}</td>
                      ))}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DetailsLayout>
  );
}
