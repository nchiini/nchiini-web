import Card from "@/components/cards/tribes-card/page";

const { tribes } = require("../../../tribes.js");
const Tribes = () => {
  return (
    <div className="md:py-7 py-2">
      <div className="pb-3 flex gap-2 items-center text-white/40">
        <div className="text-white/70 text-[12px]">
          tribes
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="md:text-5xl text-3xl font-[700]">
        Discover tribes and cultures in cameroon
      </div>
      <div className="grid py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tribes.map((elem: any, index: any) => (
          <Card
            id={index}
            description={elem.tribeDescription}
            key={index}
            imageUrl={elem.imageUrl}
            title={elem.tribeName}
          />
        ))}
      </div>
    </div>
  );
};

export default Tribes;
