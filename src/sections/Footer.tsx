import Logo from "@/assets/logo.svg";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-instagram.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4 items-center md:justify-between md:">
          <div className="flex gap-2 items-center">
            <Logo className="size-6" />
            <p className="capitalize font-medium text-sm">AI Startup Landing Page</p>
          </div>
          <div className="mt-8 md:mt-0">
            <nav className="flex flex-col md:flex-row gap-5 text-xs text-center text-white/70">
              <a href="#">Features</a>
              <a href="#">Developers</a>
              <a href="#">Company</a>
              <a href="#">Blog</a>
              <a href="#">Changelog</a>
            </nav>
          </div>
          <div className="mt-8 md:mt-0">
            <ul className="flex gap-5 *:text-white/40">
              <SocialX />
              <SocialInsta />
              <SocialYoutube />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
