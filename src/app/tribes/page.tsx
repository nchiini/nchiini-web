const { tribes } = require("../../../tribes.js");
const Tribes = () => {
  return (
    <div className="py-7">
      <div className="md:text-5xl text-3xl font-[700]">
        Discover tribes and cultures in cameroon
      </div>
      <div className="grid py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tribes.map((elem: any, index: any) => (
          <div
            key={index}
            className="w-full flex flex-col gap-2 border cursor-pointer border-primary-main rounded-xl p-3 bg-grey-2"
          >
            <img src={elem.imageUrl} />
            <div className="text-primary-main text-2xl font-[700]">
              {elem.tribeName}
            </div>
            <div className="text-sm text-white/60">{elem.tribeDescription}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tribes;
