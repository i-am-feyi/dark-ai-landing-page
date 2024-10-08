"use client";

import Image from "next/image";
import productImage from "@/assets/product-image.png";
import { DotLottiePlayer } from "@dotlottie/react-player";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="heading-container">
          <h2 className="section-title">Elevate your SEO efforts</h2>
          <p className="section-description">
            From small startups to large enterprises, our AI-driven tool has
            revolutionized the way businesses approach SEO.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 mt-10">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className="flex items-center gap-2.5 border border-white/15 p-2.5 rounded-xl lg:flex-1"
            >
              <div className="flex items-center justify-center size-12 border border-white/15 rounded-xl">
                <DotLottiePlayer src={tab.icon} className="size-5" autoplay loop />
              </div>
              <div className="font-medium">{tab.title}</div>
              {tab.isNew && (
                <div className="bg-[#8c44ff] text-black font-semibold text-xs px-2 py-0.5 rounded-full">
                  New
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
