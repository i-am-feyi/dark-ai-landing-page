import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 py-4 border-b md:border-none border-white/15 backdrop-blur-3xl md:backdrop-blur-none">
      <div className="container">
        <div className="md:border border-white/15 md:p-2.5 rounded-xl flex justify-between items-center max-w-2xl mx-auto md:backdrop-blur-3xl">
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
            <Button>Join waitlist</Button>
            <MenuIcon className="size-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
