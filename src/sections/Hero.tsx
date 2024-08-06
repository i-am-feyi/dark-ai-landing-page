import Button from "@/components/button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section
      className="relative h-[492px] md:h-[800px] flex items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>

      {/* Start of Planet */}
      <div className="absolute size-64 md:size-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 globe-gradient globe-shadow" />
      {/* End of Planet */}

      {/* Start of Orbit 1 */}
      <div className="absolute size-[344px] md:size-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute size-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2  -translate-y-1/2" />
        <div className="absolute size-2 top-0 bg-white rounded-full left-1/2 -translate-x-1/2  -translate-y-1/2" />
        <div className="absolute size-5 top-1/2 border border-white rounded-full left-full -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center">
          <div className="size-2 bg-white rounded-full"></div>
        </div>
      </div>
      {/* End of Orbit 1 */}

      {/* Start of Orbit 2 */}
      <div className="absolute size-[444px] md:size-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>
      {/* End of Orbit 2 */}

      {/* Start of Orbit 3 */}
      <div className="absolute size-[544px] md:size-[980px] rounded-full opacity-20 border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute size-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2  -translate-y-1/2" />
        <div className="absolute size-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2  -translate-y-1/2" />
        <div className="absolute size-5 top-1/2 border border-white rounded-full left-full -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center">
          <div className="size-2 bg-white rounded-full"></div>
        </div>
      </div>
      {/* End of Orbit 3 */}

      {/* Start of Hero Content */}
      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,0.5))] tracking-tighter bg-clip-text text-transparent text-center">
          AI SEO
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center md:text-xl max-w-xl mx-auto">
          Elevate your site's visibility effortlessly with AI, where smart technology
          meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </section>
  );
};
