const Origin = () => {
  return (
    <div className="pb-20 flex flex-col gap-12">
      <Section title={"Foundation"} />
      <div className="p-20 rounded-xl bg-white/70 text-black w-full flex  flex-col md:flex-row md:grid grid-cols-3 gap-7">
        <div className="w-full flex flex-col gap-2">
          <div className="text-5xl font-bold">100+</div>
          <div className="font-bold text-xl">
            Chiefs have ruled the villages
          </div>
          <div className="text-black/70 text-[12px]">
            The Bayangi people have cultivated a cultural pattern deeply rooted
            in history. Their origins can be traced back to the expansive Kanem
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="text-5xl font-bold">15</div>
          <div className="font-bold text-xl">Villages exist in this tribe</div>
          <div className="text-black/70 text-[12px]">
            The Bayangi people have cultivated a cultural pattern deeply rooted
            in history. Their origins can be traced back to the expansive Kanem
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="text-5xl font-bold">96k</div>
          <div className="font-bold text-xl">People are from this tribe</div>
          <div className="text-black/70 text-[12px]">
            The Bayangi people have cultivated a cultural pattern deeply rooted
            in history. Their origins can be traced back to the expansive Kanem
          </div>
        </div>
      </div>
      <Section leftImage={false} title={"The People"} />
      <Section leftImage={true} title={"Traditional Rulers"} />
      <Section leftImage={false} title={"Villages"} />
    </div>
  );
};

export default Origin;

const Section = ({ title, leftImage = true }: any) => {
  return (
    <div className="flex flex-col md:flex-row gap-9 w-full">
      {leftImage && (
        <img
          src="/tribes/Image7.png"
          className="min-w-[400px] hidden md:flex h-[400px] rounded-xl object-cover"
        />
      )}
      <img
        src="/tribes/Image7.png"
        className="min-w-[400px] md:hidden h-[400px] rounded-xl object-cover"
      />
      <div className="flex flex-col gap-4">
        <div className="text-5xl font-extrabold">{title}</div>
        <div className="text-white/70">
          The Bayangi people have cultivated a cultural pattern deeply rooted in
          history. Their origins can be traced back to the expansive Kanem Borno
          Empire, connecting them to a heritage that stretches from Chad to
          Nigeria where many other Bantu languages are also spoken. The Bayangi
          people have cultivated a cultural pattern deeply rooted in
          history. Their origins can be traced back to the expansive Kanem Borno
          Empire, connecting them to a heritage that stretches from Chad to
          Nigeria where many other Bantu languages are also spoken.The Bayangi
          people have cultivated a cultural pattern deeply rooted in
          history. Their origins can be traced back to the expansive Kanem Borno
          Empire, connecting them to a heritage that stretches from Chad to
          Nigeria where many other Bantu languages are also spoken.back to the
          expansive Kanem Borno Empire, connecting them to a heritage that
          stretches from Chad to Nigeria where many other Bantu languages are
          also spoken.The Bayangi people have cultivated a cultural pattern
          deeply rooted in history. Their origins can be traced back to the
          expansive Kanem Borno Empire, connecting them to a heritage that
        </div>
      </div>
      {!leftImage && (
        <img
          src="/tribes/Image7.png"
          className="min-w-[400px] h-[400px] hidden md:flex rounded-xl object-cover"
        />
      )}
    </div>
  );
};
