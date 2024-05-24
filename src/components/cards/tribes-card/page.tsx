import Link from "next/link";

const Card = ({ title, description, imageUrl, id }: any) => {
  return (
    <Link title={title} href={"/tribes/" + id + "?tab=Origin"} className="w-full flex flex-col gap-2 border hover:border-white/40 cursor-pointer border-white/10 rounded-3xl p-3 bg-grey-2">
      <div className="overflow-hidden rounded-2xl"><img src={imageUrl} className="md:hover:scale-105 duration-[2000ms]" /></div>
      <div className="text-primary-main text-2xl font-[700]">{title}</div>
      <div className="text-sm text-white/60 line-clamp-3">{description}</div>
    </Link>
  );
};

export default Card;
