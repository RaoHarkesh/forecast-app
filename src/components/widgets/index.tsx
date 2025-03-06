const Widget = () => {
  return (
    <div
      style={{
        borderImageSource: "linear-gradient(to bottom, blue, #72CFFF)",
        borderImageSlice: 1,
      }}
      className="relative rounded-md h-[200px] w-[200px] flex-none border-[2px] backdrop-blur-[2px]"
    >
      <div className="w-full h-full"></div>
    </div>
  );
};

export default Widget;
