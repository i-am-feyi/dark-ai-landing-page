import Button from "@/components/button";
import starsBg from "@/assets/stars.png";
import gridImage from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          style={{ backgroundImage: `url(${starsBg.src})` }}
          className="relative border border-white/15 rounded-xl py-24 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{ backgroundImage: `url(${gridImage.src})` }}
          ></div>

          <div className="relative">
            <div className="heading-container">
              <h2 className="section-title">AI-driven SEO for everyone.</h2>
              <p className={"section-description px-4 max-w-xs mx-auto"}>
                Achieve clear, impactful results without the complexity.
              </p>
            </div>
            <div className="flex justify-center mt-5">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
