import Image from "next/image";
import CustomCheckbox from "../checkbox";
import Button from "../buttons";

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
  };
}

export default function SideMenuItem({ item }: Props) {
  return (
    <div className="flex py-8 w-full">
      <div className="w-fit">
        <CustomCheckbox />
      </div>
      <div className="flex-1 flex gap-1">
        <div className="flex flex-col gap-2 ">
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
        </div>
        <div className="flex flex-col gap-2 ">
          <Button customStyles="!bg-greywhite !text-black !text-[10px] !font-bold w-fit !py-[1px] !px-[5px]">
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
        </div>
      </div>
      <div className="w-fit">
        <Image src={"/icons/mail-icon.png"} alt="mail" height={20} width={20} />
      </div>
    </div>
  );
}
