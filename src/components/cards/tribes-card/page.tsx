import Link from "next/link";

const Card = ({ title, description, imageUrl, id }: any) => {
  return (
    <Link href={"/tribes/" + id + "?tab=Origin"} className="w-full flex flex-col gap-2 border cursor-pointer border-primary-main rounded-xl p-3 bg-grey-2">
      <img src={imageUrl} />
      <div className="text-primary-main text-2xl font-[700]">{title}</div>
      <div className="text-sm text-white/60">{description}</div>
    </Link>
  );
};

export default Card;
