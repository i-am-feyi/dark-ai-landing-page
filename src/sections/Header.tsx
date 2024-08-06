import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
  return (
    <header className="py-4 border-b md:border-none border-white/15">
      <div className="container">
        <div className="md:border border-white/15 md:p-2.5 rounded-xl flex justify-between items-center max-w-2xl mx-auto">
          <div>
            <div className="border size-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="size-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8">
              <a href="#" className="text-white/70 transition hover:text-white">
                Features
              </a>
              <a href="#" className="text-white/70 transition hover:text-white">
                Developers
              </a>
              <a href="#" className="text-white/70 transition hover:text-white">
                Pricing
              </a>
              <a href="#" className="text-white/70 transition hover:text-white">
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              <div className="absolute inset-0 rounded-lg">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]" />
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg" />
              </div>
              <span>Join waitlist</span>
            </button>
            <MenuIcon className="size-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
