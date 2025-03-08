import DetailsLayout from "@/components/details-layout";
import Image from "next/image";
import CustomSwitch from "@/components/switch/index";
import CustomPopover from "@/components/popup";

export default function DetailsPageModule() {
  return (
    <DetailsLayout>
      <div className="">
        <div className="sticky top-0">
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
      </div>
    </DetailsLayout>
  );
}
