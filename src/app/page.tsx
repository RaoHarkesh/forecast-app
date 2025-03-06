import Button from "@/components/buttons";
import Widget from "@/components/widgets";
import WorldMap from "@/components/world-map/index";
import MaxWidthWrapper from "@/components/wrappers";

const Home = () => {
  return (
    <>
      <section>
        <div className="w-screen h-screen overflow-hidden fixed z-[-1]">
          <WorldMap />
        </div>
      </section>
      <MaxWidthWrapper>
        <section className="">
          <div className="flex gap-4 mb-10 items-end">
            <span className="text-white text-3xl font-bold">Hello user,</span>
            <Button>There are 2 action items</Button>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full overflow-x-auto flex gap-5">
              <Widget />
              <Widget />
              <Widget />
              <Widget />
              <Widget />
              <Widget />
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default Home;
