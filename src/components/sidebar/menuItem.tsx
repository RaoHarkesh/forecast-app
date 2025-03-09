import Image from "next/image";
import CustomCheckbox from "../checkbox";
import Button from "../buttons";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setActiveSidebar } from "@/app/store/sidebar";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchChartData } from "@/app/store/detailsSlice/details";
import { useEffect } from "react";

interface Props {
  item: {
    id: string;
    fCast: {
      title: string;
      up: boolean;
    };
    facc: {
      title: string;
      up: boolean;
    };
    collapse: boolean;
  };
}

export default function SideMenuItem({ item }: Props) {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.sidebarData.active);

  const handleClick = async () => {
    dispatch(setActiveSidebar(item.id));
  };

  useEffect(() => {
    if (active) {
      dispatch(fetchChartData(Number(active)));
    }
  }, [active]);

  return (
    <div
      className={`flex py-8 w-full cursor-pointer box-border transition-colors duration-200 ${
        active === item.id && "border-2 border-selectblue bg-[#4A5960]"
      }`}
      onClick={handleClick}
    >
      <div className="w-fit">
        <CustomCheckbox />
      </div>
      <div className="flex-1 flex gap-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: item.collapse ? 0.2 : 2 }}
          className={`flex flex-col gap-2  ${
            item.collapse ? "hidden" : "block"
          }`}
        >
          <Button customStyles="!bg-greywhite !text-black !text-[10px] !font-bold w-fit !py-[1px] !px-[5px]">
            <div className="flex gap-1">
              <Image
                src={"/icons/up-arrow.png"}
                alt=""
                height={10}
                width={15}
              />
              <span className="uppercase">{item.fCast.title}</span>
            </div>
          </Button>
          <span className="text-sideTabGray text-[10px] font-bold uppercase">
            Sample stack
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: item.collapse ? 0.2 : 2 }}
          className={`flex flex-col gap-2  ${
            item.collapse ? "hidden" : "block"
          }`}
        >
          <Button
            customStyles={`!bg-greywhite !text-black !text-[10px] !font-bold w-fit !py-[1px] !px-[5px] `}
          >
            <div className="flex gap-1">
              <Image
                src={"/icons/up-arrow.png"}
                alt=""
                height={10}
                width={15}
              />
              <span className="uppercase">{item.facc.title}</span>
            </div>
          </Button>
        </motion.div>
      </div>
      <div className="w-fit">
        <Image src={"/icons/mail-icon.png"} alt="mail" height={20} width={20} />
      </div>
    </div>
  );
}
