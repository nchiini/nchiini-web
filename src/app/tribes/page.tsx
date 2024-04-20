import Card from "@/components/cards/tribes-card/page";

const { tribes } = require("../../../tribes.js");
const Tribes = () => {
  return (
    <div className="md:py-7 py-2">
      <div className="md:text-5xl text-3xl font-[700]">
        Discover tribes and cultures in cameroon
      </div>
      <div className="grid py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tribes.map((elem: any, index: any) => (
          <Card description={elem.tribeDescription} key={index} imageUrl={elem.imageUrl} title={elem.tribeName} />
        ))}
      </div>
    </div>
  );
};

export default Tribes;
