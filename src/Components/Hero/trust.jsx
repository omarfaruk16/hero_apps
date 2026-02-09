const TrustedStats = () => {
  const stats = [
    {
      label: "Total Downloads",
      value: "29.6M",
      note: "21% More Than Last Month",
    },
    {
      label: "Total Reviews",
      value: "906K",
      note: "46% More Than Last Month",
    },
    {
      label: "Active Apps",
      value: "132+",
      note: "31 More Will Launch",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-2xl font-extrabold tracking-wide text-white sm:text-3xl">
          Trusted By Millions, Built For You
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="text-white">
              <p className="text-xs font-medium tracking-widest text-white/80">
                {item.label.toUpperCase()}
              </p>

              <p className="mt-3 text-4xl font-extrabold sm:text-5xl">
                {item.value}
              </p>

              <p className="mt-2 text-[11px] tracking-widest text-white/70">
                {item.note.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedStats;
