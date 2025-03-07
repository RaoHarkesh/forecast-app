"use client";

import { SyntheticEvent, useState } from "react";
import { Tabs as MuiTabs, Tab } from "@mui/material";

interface Props {
  data: Array<{ label: string; id: string; count: number }>;
}

export default function Tabs({ data }: Props) {
  const [value, setValue] = useState<number>(0);
  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    newvalue: number
  ) => {
    setValue(newvalue);
  };

  function allyProps(index: number) {
    return {
      id: `tab-${index}`,
      "area-controls": `tabelpanel-${index}`,
    };
  }
  return (
    <div>
      <MuiTabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          sx: {
            height: 4,
            backgroundColor: "#65FDDF",
          },
        }}
      >
        {data.map((tabEle, idx) => (
          <Tab
            key={tabEle.id}
            sx={{
              fontWeight: 700,
              paddingLeft: 0,
              color: "#999C9E",
              "&.Mui-selected": { color: "#72CFFF" },
            }}
            label={
              <div className="inline text-[10px]">
                {tabEle.label}
                <span className="text-smallTextGray">{` (${tabEle.count})`}</span>
              </div>
            }
            {...allyProps(idx)}
          />
        ))}
      </MuiTabs>
    </div>
  );
}
