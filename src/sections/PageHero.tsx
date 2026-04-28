type PageHeroProps = {
  title: string;
  intro: string;
};

export const PageHero = ({ title, intro }: PageHeroProps) => {
  return (
    <section className="relative overflow-clip bg-[linear-gradient(to_bottom,#000,#200d42_45%,#5f2ca8_100%)] py-24 md:py-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,75,75,0.1),transparent_28%)]"></div>
      <div className="absolute left-1/2 top-full h-[320px] w-[720px] -translate-x-1/2 rounded-[100%] border border-[#b48cde] bg-[radial-gradient(closest-side,#000_78%,#9560eb)] md:h-[420px] md:w-[1100px]"></div>
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Alex Motosport</p>
          <h1 className="mt-6 text-5xl font-bold tracking-tighter md:text-7xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">{intro}</p>
        </div>
      </div>
    </section>
  );
};
